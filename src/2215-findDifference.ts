export function findDifference(nums1: number[], nums2: number[]): number[][] {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);

  const answer: number[][] = [[], []];

  set1.forEach((value) => {
    if (set2.has(value) === false) {
      answer[0].push(value);
    }
  });

  set2.forEach((value) => {
    if (set1.has(value) === false) {
      answer[1].push(value);
    }
  });

  return answer;
}
