import { initChangeOfCityAndWeather } from "./initChangeOfCityAndWeather.js";
import { init } from "./init.js";
import { getWeather } from "./getWeather.js";
import { drawWeather } from "./drawWeather.js";

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

    const event = new Event("submit");
    input.value = "Vologda";
    form.dispatchEvent(event);

    await initChangeOfCityAndWeather();

    expect(getWeather).toBeCalledWith("Vologda");
    expect(drawWeather).toBeCalledWith(await getWeather("Vologda"));
    expect(createNewMap).toBeCalledWith(await getWeather("Vologda"));
  });
});
