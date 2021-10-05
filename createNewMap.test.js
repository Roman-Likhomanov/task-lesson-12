import { createNewMap } from "./createNewMap.js";

describe("createNewMap", () => {
  it("getting the coordinates", () => {
    const data = { coord: { lon: 39, lat: 59 } };

    window.ymaps = jest.fn(() => {});
    ymaps.ready = jest.fn(() => {});

    createNewMap(data);

    expect(ymaps.ready).toHaveBeenCalledTimes(1);
  });
});
