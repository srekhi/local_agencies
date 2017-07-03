class Api::AgenciesController < ApplicationController
  DEGREES_TO_RADIANS = Math::PI / 180
  def index
    address1 = params[:address1].split(" ").join("+")
    address2 = params[:address2].split(" ").join("+")
    geocoding_key = ENV['google_geocoding_key']
    places_key = ENV['google_places_key']

    @agencies = []
    
    [address1, address2].each do |address|
      # => geocoding logic
      geocoding_call = "https://maps.googleapis.com/maps/api/geocode/json?address=#{address}&key=#{geocoding_key}"

      res = HTTParty.get(geocoding_call)
      if address == address1
        @lat1 = res.parsed_response['results'][0]['geometry']['location']['lat']
        @lng1 = res.parsed_response['results'][0]['geometry']['location']['lng']
      else
        @lat2 = res.parsed_response['results'][0]['geometry']['location']['lat']
        @lng2 = res.parsed_response['results'][0]['geometry']['location']['lng']
      end
      # => google places logic
      radius = 16093.4 # => 16093.4 meters = 10 miles
      type = 'real_estate_agency'
      lat = (address == address1 ? @lat1 : @lat2)
      lng = (address == address2 ? @lng1 : @lng2)
      places_call = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=#{lat},#{lng}&radius=#{radius}&type=#{type}&key=#{places_key}"
      @agencies += HTTParty.get(places_call).parsed_response['results']
      # listings is an array of result objects.
    end
    # these are the two address objects
    point1 = { lat: @lat1.to_f * DEGREES_TO_RADIANS,
              lng: @lng1.to_f * DEGREES_TO_RADIANS
            }
    point2 = { lat: @lat2 = @lat2.to_f * DEGREES_TO_RADIANS,
              lng: @lng2.to_f * DEGREES_TO_RADIANS
            }
    earth_radius = 3959 # miles
    @agencies.sort_by! do |agency|
      agency_lat = agency['geometry']['location']['lat'].to_f * DEGREES_TO_RADIANS
      agency_lng = agency['geometry']['location']['lng'].to_f * DEGREES_TO_RADIANS

      h_val = haversine(agency_lat, agency_lng, point1) + haversine(agency_lat, agency_lng, point2)
      # => h_val is the haversine distance between agency <-> point1  + agency <-> point2
      distance = 2 * earth_radius * Math.asin(Math.sqrt(h_val))
      agency['distance'] = distance
      distance
    end
    render :index
  end

  def hav(radians)
    (1 - Math.cos(radians))/2.to_f
  end

  def haversine(agency_lat, agency_lng, point)
    hav(agency_lat - point[:lat])+ Math.cos(agency_lat) * Math.cos(point[:lat]) * hav(agency_lng - point[:lng])
  end

end
