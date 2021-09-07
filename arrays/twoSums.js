var twoSum = function(nums, target) {
    //n solution
    var nums1 = new Map();
    for(let i = 0; i < nums.length; i++){
        if(nums1.has(nums[i])){
            return [i, nums1.get(nums[i])];
        }
        
        nums1.set(target - nums[i], i);
    }
    
    return null;    
};