import { init } from "./init.js";

describe("init", () => {
  it("creates basic markup", () => {
    init();
    const list = document.querySelector("p");
    const button = document.querySelector("button");
    const input = document.querySelector("input");
    const container = document.querySelector(".container");
    const formContainer = document.querySelector(".form-container");
    const weatherContainer = document.querySelector(".weather-container");

    expect(list).toBeTruthy();
    expect(button).toBeTruthy();
    expect(input).toBeTruthy();
    expect(container).toBeTruthy();
    expect(formContainer).toBeTruthy();
    expect(weatherContainer).toBeTruthy();
  });
});
