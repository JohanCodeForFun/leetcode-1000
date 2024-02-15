/*
  Time Complexity: O(1)
  Space Complexity: O(1)

  Difficulty: Easy
  Tags: String
*/

function countSegments(s: string): number {
  s = s.trim();
  if (s === "") return 0;
  
  return s.split(/\s+/).length
};