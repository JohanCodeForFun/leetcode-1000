/*
  1431. Kids With the Greatest Number of Candies

  const candies = [2,3,5,1,3], extraCandies = 3
  const test = kidsWithCandies(candies, extraCandies)
  const result = [true,true,true,false,true] 
*/

export function kidsWithCandies(
  candies: number[],
  extraCandies: number
): boolean[] {
  const array: boolean[] = [];

  for (let kid of candies) {
    const kidWithExtraCandy = kid + extraCandies;

    const isGreatest = candies.every((candy) => candy <= kidWithExtraCandy);

    array.push(isGreatest);
  }

  return array;
}
