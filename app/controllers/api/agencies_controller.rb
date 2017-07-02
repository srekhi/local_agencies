class Api::AgenciesController < ApplicationController
  def index
    debugger
    address1 = params[:address1]
    address2 = params[:address2]
    geocoding_key = Figaro.google_geocoding_key
    places_key = Figaro.google_places_key

    geocoding_call = "https://maps.googleapis.com/maps/api/geocode/json?address=#{address1}&key=#{geocoding_key}"
    geocode_res = HTTParty.get(geocoding_call)

    lat = res.parsed_response['results'][0]['geometry']['location']['lat']
    lng = res.parsed_response['results'][0]['geometry']['location']['lng']


    # places_call = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json
    #   ?location=-33.8670522,151.1957362
    #   &radius=500
    #   &types=food
    #   &name=harbour
    #   &key=YOUR_API_KEY'

  end
end
