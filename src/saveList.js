export function saveList(items) {
  const city = "city";
  localStorage.setItem(city, JSON.stringify(items));
}
