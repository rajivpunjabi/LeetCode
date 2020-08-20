/**
 *
 * 1480. Running Sum of 1d Array [Easy]
 * https://leetcode.com/problems/running-sum-of-1d-array/
 *
 * Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
 * Return the running sum of nums.
 *
 * Example 1:
 * Input: nums = [1,2,3,4]
 * Output: [1,3,6,10]
 * Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
 *
 * Example 2:
 * Input: nums = [1,1,1,1,1]
 * Output: [1,2,3,4,5]
 * Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
 *
 * Example 3:
 * Input: nums = [3,1,2,10,1]
 * Output: [3,4,6,16,17]
 *
 */

function runningSum(nums: number[]): number[] {
	let sum = 0;
	return nums.map((num) => {
		sum += num;
		return sum;
	});
}

function runningSumSecond(nums: number[]): number[] {
	let result: number[] = [];
	nums.reduce((prev, curr) => {
		result.push(prev + curr);
		return prev + curr;
	}, 0);
	return result;
}

//runningSum
console.log(runningSum([1, 2, 3, 4]));
console.log(runningSum([1, 1, 1, 1, 1]));
console.log(runningSum([3, 1, 2, 10, 1]));

//runningSumSecond
console.log(runningSumSecond([1, 2, 3, 4]));
console.log(runningSumSecond([1, 1, 1, 1, 1]));
console.log(runningSumSecond([3, 1, 2, 10, 1]));
