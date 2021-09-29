import { createNewMap } from "./createNewMap.js";

describe("createNewMap", () => {
  it("getting the coordinates", () => {
    const data = { coord: { lon: 39.8886, lat: 59.2187 } };
    // const lat;
    // const lon;
    createNewMap(data);
    ymaps.ready();
    expect(center).toBe([59.2187, 39.8886]);
    // expect(lon).toBe(39.8886);
  });
});
