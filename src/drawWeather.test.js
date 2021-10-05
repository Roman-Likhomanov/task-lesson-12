import { drawWeather } from "./drawWeather.js";

describe("drawWeather", () => {
  it("renders initial markup", async () => {
    const data = {
      name: "Vologda",
      weather: [{ icon: "02d" }],
      main: { temp: 282.36 },
    };
    const el = document.createElement("div");

    drawWeather(el, data);
    const div = el.querySelector("div");
    expect(div).toBeTruthy();
    expect(div.querySelector("h1")).toBeTruthy();
    expect(div.querySelector("h1").innerText).toBe("Vologda");
    expect(div.querySelector("h2")).toBeTruthy();
    expect(div.querySelector("h2").innerText).toBe("9℃");
    expect(div.querySelector("img")).toBeTruthy();
    expect(div.querySelector("img").src).toBe(
      "http://openweathermap.org/img/wn/02d@2x.png"
    );
  });
  it("if the markup is already there", async () => {
    const data = {
      name: "Vologda",
      weather: [{ icon: "02d" }],
      main: { temp: 282.36 },
    };
    const el = document.createElement("div");
    const div = document.createElement("div");
    const h1 = document.createElement("h1");
    h1.innerText = "example";
    const h2 = document.createElement("h2");
    h2.innerText = "example";
    const icon = document.createElement("img");
    icon.src = "http://openweathermap.org/img/wn/04d@2x.png";
    div.appendChild(h1);
    div.appendChild(h2);
    div.appendChild(icon);
    el.appendChild(div);

    drawWeather(el, data);
    expect(div).toBeTruthy();
    expect(div.querySelector("h1")).toBeTruthy();
    expect(div.querySelector("h1").innerText).toBe("Vologda");
    expect(div.querySelector("h2")).toBeTruthy();
    expect(div.querySelector("h2").innerText).toBe("9℃");
    expect(div.querySelector("img")).toBeTruthy();
    expect(div.querySelector("img").src).toBe(
      "http://openweathermap.org/img/wn/02d@2x.png"
    );
  });
});
