import { drawWeather } from "./drawWeather.js";
import { getWeather } from "./getWeather.js";

describe("getWeather, drawWeather", () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          name: "Vologda",
          main: { temp: 282.09 },
          weather: [{ icon: "04d" }],
        }),
    })
  );

  it("checking fetch, renders initial markup", async () => {
    const data = await getWeather("vologda");

    const el = document.createElement("div");
    drawWeather(el, data);

    const div = el.querySelector("div");
    expect(div).toBeTruthy();
    expect(div.querySelector("h1")).toBeTruthy();
    expect(el.querySelector(".h1")).toBeTruthy();
    expect(div.querySelector("h1").innerText).toBe("Vologda");
    expect(div.querySelector("h2")).toBeTruthy();
    expect(el.querySelector(".h2")).toBeTruthy();
    expect(div.querySelector("h2").innerText).toBe("9℃");
    expect(div.querySelector("img")).toBeTruthy();
    expect(el.querySelector(".icon")).toBeTruthy();
    expect(div.querySelector("img").src).toBe(
      "http://openweathermap.org/img/wn/04d@2x.png"
    );

    expect(data).toEqual({
      name: "Vologda",
      main: { temp: 282.09 },
      weather: [{ icon: "04d" }],
    });
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  // it("if the classes already exist", async () => {
  //   const data = await getWeather("vologda");

  //   const el = document.createElement("div");
  //   const div = document.createElement("div");
  //   const h1 = document.createElement("h1");
  //   const h2 = document.createElement("h2");
  //   const icon = document.createElement("img");
  //     div.appendChild(h1);
  //     h1.classList.add("h1");
  //     div.appendChild(h2);
  //     h2.classList.add("h2");
  //     div.appendChild(icon);
  //     icon.classList.add("icon");
  //     el.appendChild(div);
  //   drawWeather(el, data);
  //   expect(el.querySelector(".h1")).toBeFalsy();
  //   expect(el.querySelector(".h2")).toBeFalsy();
  //   expect(el.querySelector(".icon")).toBeFalsy();
  //  });
});
