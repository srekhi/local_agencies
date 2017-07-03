module DistanceCalculations
  def hav(radians)
    (1 - Math.cos(radians))/2.to_f
  end

  def haversine(agency_lat, agency_lng, point)
    hav(agency_lat - point[:lat])+ Math.cos(agency_lat) * Math.cos(point[:lat]) * hav(agency_lng - point[:lng])
  end
end
