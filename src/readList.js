export async function readList() {
  const city = "city";
  const result = localStorage.getItem(city);
  if (result === null) {
    return [];
  }
  return JSON.parse(result);
}
