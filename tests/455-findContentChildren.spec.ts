/*
  Assume you are an awesome parent and want to give 
  your children some cookies. But, you should give 
  each child at most one cookie.

  Each child i has a greed factor g[i], which is 
  the minimum size of a cookie that the child will 
  be content with; and each cookie j has a size s[j]. 
  If s[j] >= g[i], we can assign the cookie j to 
  the child i, and the child i will be content. 
  Your goal is to maximize the number of your 
  content children and output the maximum number.

Constraints:
  1 <= g.length <= 3 * 104
  0 <= s.length <= 3 * 104
  1 <= g[i], s[j] <= 231 - 1
*/

import { findContentChildren } from "../src/455-findContentChildren";

describe("455: Find Content Children", () => {

  it("first test", () => {
    const g = [1,2,3], s = [1,1]

    const test = findContentChildren(g, s);
    const result = 1;

    expect(test).toBe(result);
  });
  
  it("second test", () => {
    const g = [1,2], s = [1,2,3]
    const result = 2;
    
    const test = findContentChildren(g, s);

    expect(test).toBe(result);
  });

  it("edge case", () => {
    const g = [10,9,8,7], s = [5,6,7,8];
    const result = 2;
    
    const test = findContentChildren(g, s);

    expect(test).toBe(result);
  });

});
