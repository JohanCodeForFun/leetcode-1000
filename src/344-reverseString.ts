// Thank you copilot for this solution. 

/**
 Do not return anything, modify s in-place instead.

 The entire logic for reversing a string is based on 
 using the opposite directional two-pointer approach!
 */

export function reverseString(s: string[]): void {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {

    // Swap the characters
    let temp = s[left];
    s[left] = s[right];
    s[right] = temp;

    // Move towards the center
    left++;
    right--;
  }
}
