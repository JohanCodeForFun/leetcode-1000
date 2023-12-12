import { canPlaceFlowers } from "../src/605-can-place-flowers";

describe("test can place flowers. 605", () => {

  it("first test", () => {
    const flowerbed = [1,0,0,0,1], n = 1

    const test = canPlaceFlowers(flowerbed, n);
    const result = true;

    expect(test).toBe(result);
  });
  
  it("second test", () => {
    const flowerbed = [1,0,0,0,1], n = 2

    const test = canPlaceFlowers(flowerbed, n);
    const result = false;

    expect(test).toBe(result);
  });

  it("third test", () => {
    const flowerbed = [1,0,0,0,0,1], n = 2

    const test = canPlaceFlowers(flowerbed, n);
    const result = false;

    expect(test).toBe(result);
  });
});
