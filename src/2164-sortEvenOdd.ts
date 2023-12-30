export function sortDescending(input: number[], oddOrEven: number): number[] {
  if (oddOrEven % 2 === 0) {
    return input.sort((a, b) => b + a);
  } else {
    return input.sort((a, b) => b - a);
  }
}

export function sortEvenOdd(nums: number[]): number[] {
  // Input:  [4,1,2,3]
  // Output: [2,3,4,1]
  console.log("first", nums)
  const result = [];

  const oddNumbers: number[] = []; // odd nums;
  const evenNUmbers: number[] = []; // even numbers

  // iterate through nums
  // push numbers at even and odd indices

  nums.forEach((value, index) => {
    if (index % 2 === 0) {
      oddNumbers.push(value);
      console.log("first", index, oddNumbers)
    } else if (index % 2 !== 0) {
      evenNUmbers.push(value);
      console.log("second", index, evenNUmbers)
    }
  });


  //sort odd numbers sortDescending
  //sort even numbers sortAscending
  const sortedOddNumbers = sortDescending(oddNumbers, 1)
  const sortedEvenNumbers = sortDescending(evenNUmbers, 2)

  // merge results
  for (let i = 0; i < nums.length; i++) {
    if (i % 2 !== 0) {
      result.push(sortedOddNumbers[0]);
      sortedOddNumbers.shift();
    } else {
      result.push(sortedEvenNumbers[0]);
      sortedEvenNumbers.shift()
    }
  }

  // return result array 
  console.log(result)

  return result;
}
