/*
    Time Complexity: O(n)
    Space Complexity: O(n)

    Difficulty: Easy
    Tags: Array, sum

    Thank you Aaron Jeongwoo Kim for this solution!
    Link, https://leetcode.com/problems/left-and-right-sum-differences/discuss/4509106/TypeScript%3A-Simple-Solution-(Simple-loop-O(n))
*/

function leftRightDifference(nums: number[]): number[] {
    const stack: number[] = [];
    let left = 0;
    let right = nums.reduce((p, c) => p + c, 0);

    for (const num of nums) {
        right -= num;
        stack.push(Math.abs(right - left));
        left += num
    };

    return stack;
};

/*
Explanation:
Input: nums = [10,4,8,3]
Output: [15,1,11,22]
Explanation: The array leftSum is [0,10,14,22] and the array rightSum is [15,11,3,0].
The array answer is [|0 - 15|,|10 - 11|,|14 - 3|,|22 - 0|] = [15,1,11,22].


Function Walkthrough:
The function starts with left = 0 and right = 25 (the sum of all numbers in nums).

For the first number 10, 
    it subtracts 10 from right (making right = 15), 
    pushes |15 - 0| = 15 to stack, and 
    adds 10 to left (making left = 10).

For the second number 4, 
    it subtracts 4 from right (making right = 11), 
    pushes |11 - 10| = 1 to stack, and 
    adds 4 to left (making left = 14).

For the third number 8, 
    it subtracts 8 from right (making right = 3), 
    pushes |3 - 14| = 11 to stack, and 
    adds 8 to left (making left = 22).

For the fourth number 3, 
    it subtracts 3 from right (making right = 0), 
    pushes |0 - 22| = 22 to stack, and 
    adds 3 to left (making left = 25).

The function returns stack, which is [15,1,11,22].
*/

