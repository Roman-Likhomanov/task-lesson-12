export async function getWeather(cityName) {
  const apiKey = "feeab8e8e1e7b8d68fab64472693b6f7";
  const response2 = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`
  );

  const data = await response2.json();

  if (data.cod === "404") {
    throw new Error(alert("Пожалуйста, введите город корректно!"));
  }

  return data;
}
