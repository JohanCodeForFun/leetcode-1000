import { increasingTriplet } from "../src/334-increasingTriplet";

describe('test increasing triplet', () => { 
  
  it("first test", () => {
    const nums = [1,2,3,4,5]
    const test =  increasingTriplet(nums);

    const result = true

    expect(test).toEqual(result);
  });

  it("second test", () => {
    const nums = [5,4,3,2,1]
    const test =  increasingTriplet(nums);

    const result = false

    expect(test).toEqual(result);
  });

  it("third test", () => {
    const nums = [2,1,5,0,4,6]
    const test =  increasingTriplet(nums);

    const result = true

    expect(test).toEqual(result);
  });

  it("fourth test", () => {
    const nums = [20,100,10,12,5,13]
    const test =  increasingTriplet(nums);

    const result = true

    expect(test).toEqual(result);
  });
 })