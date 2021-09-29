import { drawList } from "./drawList.js";

describe("drawList", () => {
  it("checking the creation of the list", () => {
    const arr = ["vologda"];
    const div = document.createElement("div");

    drawList(div, arr);
    expect(div.innerHTML).toBe("<ol><li>vologda</li></ol>");
  });
});
