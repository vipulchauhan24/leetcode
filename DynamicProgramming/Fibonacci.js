const fibonacciMemo = () => {
    let memo = {};
    return function fib(n){
        if(n in memo) return memo[n];
        if(n <= 2) return 1;

        memo[n] = fib(n - 1) + fib(n - 2);
        return memo[n];
    }
}
const fibObj = fibonacciMemo();
console.log(fibObj(10))