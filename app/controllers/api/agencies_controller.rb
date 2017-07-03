class Api::AgenciesController < ApplicationController
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
      lat = res.parsed_response['results'][0]['geometry']['location']['lat']
      lng = res.parsed_response['results'][0]['geometry']['location']['lng']

      # => google places logic
      radius = 1000
      type = 'real_estate_agency'
      places_call = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=#{lat},#{lng}&radius=#{radius}&type=#{type}&key=#{places_key}"
      @agencies += HTTParty.get(places_call).parsed_response['results']
      # listings is an array of result objects.
    end
    render :index
  end

end
