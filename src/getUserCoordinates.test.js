import { getUserCoordinates } from "./getUserCoordinates.js";

describe("getUserCoordinates", () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({ city: "Vologda" }),
    })
  );

  it("finds city", async () => {
    const city = await getUserCoordinates();

    expect(city).toEqual("Vologda");
    expect(fetch).toHaveBeenCalledTimes(1);
  });
});
