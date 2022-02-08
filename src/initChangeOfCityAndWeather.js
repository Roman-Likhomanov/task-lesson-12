import { getUserCoordinates } from "./getUserCoordinates.js";
import { getWeather } from "./getWeather.js";
import { drawWeather } from "./drawWeather.js";
import { readList } from "./readList.js";
import { saveList } from "./saveList.js";
import { drawList } from "./drawList.js";
import { createNewMap } from "./createNewMap.js";
import { init } from "./init.js";

export async function initChangeOfCityAndWeather() {
  init();
  const form = document.querySelector("form");
  const listEl = document.querySelector("p");
  const weatherInfoEl = document.querySelector(".weather-container");

  const userCoordinates = await getUserCoordinates();
  const weatherByCoordinates = await getWeather(userCoordinates);

  drawWeather(weatherInfoEl, weatherByCoordinates);
  createNewMap(weatherByCoordinates);

  const items = await readList();

  drawList(listEl, items);

  form.addEventListener("submit", async (ev) => {
    ev.preventDefault();

    const formElement = ev.target;
    const input = formElement.querySelector("input");
    const cityName2 = input.value;
    input.value = "";

    const weather = await getWeather(cityName2);
    const items = await readList();
    items.push(cityName2);

    const items2 = Array.from(new Set(items));

    if (items2.length > 10) {
      items2.shift();
    }

    drawList(listEl, items2);
    saveList(items2);

    drawWeather(weatherInfoEl, weather);
    createNewMap(weather);
  });

  listEl.addEventListener("click", async (ev) => {
    if (ev.target.tagName === "LI") {
      const cityName3 = ev.target.innerText;
      const weather2 = await getWeather(cityName3);
      drawWeather(weatherInfoEl, weather2);
      createNewMap(weather2);
    }
  });
}
