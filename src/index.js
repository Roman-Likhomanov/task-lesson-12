import { getUserCoordinates } from "./getUserCoordinates.js";
import { getWeather } from "./getWeather.js";
import { drawWeather } from "./drawWeather.js";
import { readList } from "./readList.js";
import { saveList } from "./saveList.js";
import { drawList } from "./drawList.js";
import { createNewMap } from "./createNewMap.js";

(async function () {
  const form = document.querySelector("form");
  const listEl = document.querySelector("#list");
  const weatherInfoEl = document.querySelector("#weatherInfo");
  //  const key = "key";

  const userCoordinates = await getUserCoordinates();
  const weatherByCoordinates = await getWeather(userCoordinates);

  drawWeather(weatherByCoordinates);
  createNewMap(weatherByCoordinates);

  const items = await readList();
  drawList(listEl, items);

  form.addEventListener("submit", async (ev) => {
    ev.preventDefault();

    const formElement = ev.target;
    const input = formElement.querySelector("input");
    const cityName2 = input.value;
    input.value = "";

    items.push(cityName2);

    if (items.length > 10) {
      items.shift();
    }
    drawList(listEl, items);

    saveList(items);

    const weather = await getWeather(cityName2);
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
})();
