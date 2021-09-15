export async function readList() {
  const result = localStorage.getItem(key);
  if (result === null) {
    return [];
  }
  return JSON.parse(result);
}
