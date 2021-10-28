var singleNumber = function(nums) {
  const len = nums.length;
  const map = new Map();
  for(let i = 0; i < len;i++){
    if(!map.has(nums[i])){
      map.set(nums[i], true)
    } else {
      map.set(nums[i], false)
    }
  }
  for(let m of map.keys()){
    if(map.get(m)){
      return m
    }
  }
};
console.log(singleNumber([4,1,2,1,2]))
