export function findDifference(nums1: number[], nums2: number[]): number[][] {

  const set1 = new Set(nums1);
  const set2 = new Set(nums2);

  const result1 = [];
  const result2 = [];

  for (let i = 0; i < nums1.length; i++) {
    if (set1.has(set2[i])) {
      //result1.push(set2[i])
    }
      // console.log("hey", set1.has(2))
      // console.log("hoo", set2.has(2))
    if (set2.has(set1[i])) {
      //result2.push(set1[i])
    }
  }

  return [[1], [2]];
};