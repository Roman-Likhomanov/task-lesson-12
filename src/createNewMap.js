export function createNewMap(data) {
  const {lat} = data.coord;
  const {lon} = data.coord;
  const map = new YMaps.Map(document.getElementById("YMapsID"));
  map.setCenter(new YMaps.GeoPoint(lat, lon), 10);
}
