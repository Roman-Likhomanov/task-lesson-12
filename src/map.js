const lot = 37.64;
const lan = 55.76;
window.onload = function () {
  const map = new YMaps.Map(document.getElementById("YMapsID"));
  map.setCenter(new YMaps.GeoPoint(lot, lan), 10);
  console.log(lot, lan);
};
