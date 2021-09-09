//time complexity = O(2^m+n), space complexity = O(m + n)
const gridTraveller = (m, n) =>{
    let memo = {};
    return function gridTravellerMemo(m, n){
        const key = m + ',' + n;
        if(key in memo) {
            return memo[key];
        }
        if(m === 1 && n === 1) {
            return 1;
        }
        if(m === 0 || n === 0) {
            return 0;
        } 
    
        memo[key] = gridTravellerMemo(m - 1, n) + gridTravellerMemo(m, n - 1);
        return memo[key];
    }
}
const grid = gridTraveller() 
console.log(grid(18,18))