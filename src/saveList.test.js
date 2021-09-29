import { saveList } from "./saveList.js";

describe("saveList", () => {
  it("should save to local storage", () => {
    const arr = ["vologda", "moscow", "minsk"];
    jest.spyOn(window.localStorage.__proto__, "setItem");
    saveList(arr);
    expect(localStorage.setItem).toHaveBeenCalledWith(
      "city",
      '["vologda","moscow","minsk"]'
    );
  });
});
