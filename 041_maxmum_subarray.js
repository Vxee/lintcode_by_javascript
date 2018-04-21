/**
 * @param nums: A list of integers
 * @return: A integer indicate the sum of max subarray
 */
const maxSubArray = function (nums) {
    const len = nums.length;
    if(nums === null || len === 0){
        return 0;
    }
    let max = -Number.MAX_VALUE;
    let sum = 0;
    
    for(let i = 0; i < len; i++){
        sum = Math.max(nums[i],sum+nums[i]);
        max = Math.max(max,sum);
    }
    return max;
}
