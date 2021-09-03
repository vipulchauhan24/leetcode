var containsDuplicate = function(nums) {
  const len = nums.length;
  var check = new Set();
  for(let num of nums){
    if(check.has(num)){
      return true;
    } else{
      check.add(num)
    }
  }
  return false;
};

console.log(containsDuplicate([1,2,3,1]))