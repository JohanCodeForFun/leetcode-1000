import { kidsWithCandies } from "../src/extra-candies-1431";

describe("testing for greatest number of candies among all the kids", () => {
  it("first test", () => {
    const candies = [2, 3, 5, 1, 3],
    extraCandies = 3;
    
    const test = kidsWithCandies(candies, extraCandies);
    const result = [true, true, true, false, true];

    expect(test).toStrictEqual(result);
  });
  it("second test", () => {
    const candies = [4, 2, 1, 1, 2],
    extraCandies = 1;

    const test = kidsWithCandies(candies, extraCandies);
    const result = [true, false, false, false, false];

    expect(test).toStrictEqual(result);
  });
  it("third test", () => {
    const candies = [12, 1, 12],
    extraCandies = 10;

    const test = kidsWithCandies(candies, extraCandies);
    const result = [true, false, true];

    expect(test).toStrictEqual(result);
  });
});
