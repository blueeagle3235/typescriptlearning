import sum from "./sum";

describe("the sum function should work", () => {
  test(" 1 + 2 = 3", () => {
    console.log("test");
    expect(sum(1, 2)).toBe(3);
  });

  //   test("1 + 2 + 3 = 6", () => {
  //     expect(sum(1, 2, 3)).toBe(6);
  //   });
});
