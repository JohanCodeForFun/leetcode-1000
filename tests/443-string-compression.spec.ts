/* 
Constraints:
  1 <= chars.length <= 2000
  chars[i] is a lowercase English letter, uppercase English letter, digit, or symbol.
*/

import { compress } from "../src/443-string-compression";

describe("443: String Compression", () => {
  it('first test', () => {
    let chars = ['a', 'a', 'b', 'b', 'c', 'c', 'c'];
    let length = compress(chars);
    expect(chars.slice(0, length)).toEqual(['a', '2', 'b', '2', 'c', '3']);

  });
  it('second test', () => {
    let chars = ['a'];
    let length = compress(chars);
    expect(chars.slice(0, length)).toEqual(['a']);
  });

  it('third test', () => { 

    let chars = ['a', 'b', 'c'];
    let length = compress(chars);
    expect(chars.slice(0, length)).toEqual(['a', 'b', 'c']);
    
  });

  it('fourth test', () => {
    let chars = ['a', 'a', 'a', 'a', 'b', 'b', 'b', 'b', 'b'];

    let length = compress(chars);

    expect(chars.slice(0, length)).toEqual(['a', '4', 'b', '5']);
  });
});
