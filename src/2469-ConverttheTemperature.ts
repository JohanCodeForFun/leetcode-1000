/*
  Time Complexity: O(1)
  Space Complexity: O(1)

  Difficulty: Easy
  Tags: Math
*/

function convertTemperature(celsius: number): number[] {
  const kelvin = celsius + 273.15;
  const fahrenheit = celsius * 1.80 + 32;
  const ans = [kelvin, fahrenheit];

  return ans
};