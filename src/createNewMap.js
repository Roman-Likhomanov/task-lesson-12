export async function createNewMap(data) {
  if (document.querySelectorAll(".ymaps-2-1-79-map")) {
    document.querySelectorAll(".ymaps-2-1-79-map").forEach((e) => e.remove());
  }

  const {lat} = data.coord;
  const {lon} = data.coord;
  ymaps.ready(() => {
    new ymaps.Map("YMapsID", {
      center: [lat, lon],
      zoom: 10,
    });
  });
}
