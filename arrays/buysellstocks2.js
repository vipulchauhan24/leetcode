var maxProfit = function(prices) {
    const len = prices.length;
    max = 0;
    for(let i = 1; i < len; i++){
       if (prices[i]>prices[i-1]){
        max+=(prices[i]-prices[i-1])
       }     
    }
    return max;
};

console.log(maxProfit([7,1,5,3,6,4]))