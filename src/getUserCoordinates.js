export async function getUserCoordinates() {
  const response = await fetch("https://get.geojs.io/v1/ip/geo.json");
  const jsonData = await response.json();
  return await jsonData.city;
}
