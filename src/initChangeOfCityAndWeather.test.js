import { initChangeOfCityAndWeather } from "./initChangeOfCityAndWeather.js";
import { init } from "./init.js";
import { getWeather } from "./getWeather.js";
import { drawWeather } from "./drawWeather.js";
import { createNewMap } from "./createNewMap.js";

describe("initChangeOfCityAndWeather", () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          name: "Vologda",
          main: { temp: 278.59 },
          weather: [{ icon: "04n" }],
          coord: { lon: 39.8886, lat: 59.2187 },
        }),
    })
  );

  it("change city by user's request", async () => {
    init();
    const form = document.querySelector("form");
    const input = document.querySelector("input");
    const el = document.createElement("div");
    const data = {
      coord: { lat: 59.2187, lon: 39.8886 },
      main: { temp: 278.59 },
      name: "Vologda",
      weather: [{ icon: "04n" }],
    };

    window.ymaps = jest.fn(() => {});
    ymaps.ready = jest.fn(() => {});

    await initChangeOfCityAndWeather();
    const event = new Event("submit");
    input.value = "Vologda";
    form.dispatchEvent(event);
    await new Promise((resolve) => jest.setTimeout(resolve(), 1000));

    expect(getWeather()).resolves.toStrictEqual({
      coord: { lat: 59.2187, lon: 39.8886 },
      main: { temp: 278.59 },
      name: "Vologda",
      weather: [{ icon: "04n" }],
    });
    expect(drawWeather(el, data)).toBe();
    expect(createNewMap(data)).resolves.toBe();
  });

  it("change the city by click", async () => {
    init();
    const listEl = document.querySelector("p");
    const el = document.createElement("div");
    const data = {
      coord: { lat: 59.2187, lon: 39.8886 },
      main: { temp: 278.59 },
      name: "Vologda",
      weather: [{ icon: "04n" }],
    };

    window.ymaps = jest.fn(() => {});
    ymaps.ready = jest.fn(() => {});

    await initChangeOfCityAndWeather();
    const click = new Event("click", { target: { value: "Vologda" } });
    listEl.dispatchEvent(click);
    await new Promise((resolve) => jest.setTimeout(resolve(), 1000));

    expect(getWeather()).resolves.toStrictEqual({
      coord: { lat: 59.2187, lon: 39.8886 },
      main: { temp: 278.59 },
      name: "Vologda",
      weather: [{ icon: "04n" }],
    });
    expect(drawWeather(el, data)).toBe();
    expect(createNewMap(data)).resolves.toBe();
  });
});
