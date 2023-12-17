export const productExceptSelf = (input: number[]): number[] => {
  // it("first test", () => {
  //   const nums = [1, 2, 3, 4];
  //   const result = [24, 12, 8, 6];

  // it("second test", () => {
  //   const nums = [-1, 1, 0, -3, 3];
  //   const result = [0, 0, 9, 0, 0];

  let result = [];
  let initialNumber;

  for (let i = 0; i < input.length; i++) {
    // _1_ 2 * 3 * 4 = 24
    // 1 * _2_ 3 * 4 = 12
    // 1 * 2  _3_ * 4 = 8
    // 1  2 * 3 _4_ = 6
    
    result.push(input[i] * input[i])
  }

  return result;
};
