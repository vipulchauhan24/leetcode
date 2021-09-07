var maxSubArray = function(nums) {
    let sum = -Infinity, maxSum = -Infinity;
    for(i of nums){
        if(sum + i < i){
            sum = i;
        } else {
            sum += i;
        }
        
        if(sum > maxSum){
            maxSum = sum;
        }
    }
    
    return maxSum;
};