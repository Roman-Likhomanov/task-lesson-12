import { readList } from "./readList.js";
import { saveList } from "./saveList.js";

describe("readList", () => {
  it("if the result is null", () => {
    const city = "city";
    jest.spyOn(window.localStorage.__proto__, "getItem");

    expect(readList()).resolves.toBe([]);
    expect(localStorage.getItem).toHaveBeenCalledWith("city");
  });

  it("should read to local storage", () => {
    const arr = ["vologda", "moscow", "minsk"];
    const city = "city";

    jest.spyOn(window.localStorage.__proto__, "setItem");
    jest.spyOn(window.localStorage.__proto__, "getItem");

    saveList(arr);
    readList();
    const pars = JSON.parse(localStorage.getItem(city));
    expect(localStorage.getItem).toHaveBeenCalledWith("city");
    expect(pars).toStrictEqual(["vologda", "moscow", "minsk"]);
  });
});
