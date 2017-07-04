class Api::AgenciesController < ApplicationController
  DEGREES_TO_RADIANS = Math::PI / 180
  EARTH_RADIUS = 3959 #miles
  TEN_MILES_IN_METERS = 16093.4 #meters
  SEARCH_TYPE = 'real_estate_agency'

  def index
    address1, address2 = format_params
    geocoding_key = ENV['google_geocoding_key']
    places_key = ENV['google_places_key']
    @agencies = []
    [address1, address2].each do |address|
      geocoding_call = "https://maps.googleapis.com/maps/api/geocode/json?address=#{address}&key=#{geocoding_key}"
      res = HTTParty.get(geocoding_call)
      lat, lng = parse_api_response(res)
      @lat1, @lng1 = lat, lng if address == address1
      @lat2, @lng2 = lat, lng if address == address2
      places_call = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=#{lat},#{lng}&radius=#{TEN_MILES_IN_METERS}&type=#{SEARCH_TYPE}&key=#{places_key}"
      @agencies += HTTParty.get(places_call).parsed_response['results']
    end
    sort_agencies!
    render :index
  end

  private

  def parse_api_response(res)
    [res.parsed_response['results'][0]['geometry']['location']['lat'],
     res.parsed_response['results'][0]['geometry']['location']['lng']]
  end

  def format_params
    [params[:address1].split(" ").join("+"),
     params[:address2].split(" ").join("+")]
  end

  def create_location_objects
    point1 =
      {
        lat: @lat1.to_f * DEGREES_TO_RADIANS,
        lng: @lng1.to_f * DEGREES_TO_RADIANS
      }

    point2 =
      {
        lat: @lat2 = @lat2.to_f * DEGREES_TO_RADIANS,
        lng: @lng2.to_f * DEGREES_TO_RADIANS
      }

    [point1, point2]
  end

  def sort_agencies!
    point1, point2 = create_location_objects
    @agencies.sort_by! do |agency|
      agency_lat = agency['geometry']['location']['lat'].to_f * DEGREES_TO_RADIANS
      agency_lng = agency['geometry']['location']['lng'].to_f * DEGREES_TO_RADIANS
      h_val = haversine(agency_lat, agency_lng, point1) + haversine(agency_lat, agency_lng, point2)
      agency['distance'] = 2 * EARTH_RADIUS * Math.asin(Math.sqrt(h_val))
      # set the agency distance for display to user
      agency['distance']
    end
  end

  def hav(radians)
    (1 - Math.cos(radians))/2.to_f
  end

  def haversine(agency_lat, agency_lng, point)
    hav(agency_lat - point[:lat]) +
      Math.cos(agency_lat)  *
      Math.cos(point[:lat]) *
      hav(agency_lng - point[:lng])
  end

end
