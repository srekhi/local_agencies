class Api::AgenciesController < ApplicationController
  def index
    address1 = params[:address1].split(" ").join("+")
    address2 = params[:address2].split(" ").join("+")
    geocoding_key = ENV['google_geocoding_key']
    places_key = ENV['google_places_key']

    # => geocoding logic
    geocoding_call = "https://maps.googleapis.com/maps/api/geocode/json?address=#{address1}&key=#{geocoding_key}"

    res = HTTParty.get(geocoding_call)
    lat = res.parsed_response['results'][0]['geometry']['location']['lat']
    lng = res.parsed_response['results'][0]['geometry']['location']['lng']

    # => google places logic
    radius = 10
    places_call = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=#{lat},#{lng}&radius=#{radius}&types=food&name=harbour&key=#{places_key}"
    places_res = HTTParty.get(geocoding_call)
    
  end
end
