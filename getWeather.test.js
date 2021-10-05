import { getWeather } from "./getWeather.js";

describe("getWeather", () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({ cod: "404" }),
    })
  );

  it("throw error", async () => {
    window.alert = jest.fn();
    await expect(getWeather("ergrg")).rejects.toThrowErrorMatchingSnapshot();
    expect(window.alert).toHaveBeenCalledWith(
      "Пожалуйста, введите город корректно!"
    );
  });
});
