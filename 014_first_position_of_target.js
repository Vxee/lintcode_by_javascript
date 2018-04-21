/**
 * @param nums: The integer array.
 * @param target: Target to find.
 * @return: The first position of target. Position starts from 0.
 */
const binarySearch = function (nums, target) {
    let len = nums.length;
    let start_index = 0, end_index = len-1;
    for(let i = 0; i < len; i++){
        let index = Math.floor((start_index+end_index)/2);
        if(target === nums[index]){
            while(index > 0){
                if(nums[index-1] === target) index--;
                else break;
            }
            return index;
        }else if(target < nums[index]){
            end_index = index;
        }else if(target > nums[index]){
            start_index = index;
        }
    }
    return -1;
}


