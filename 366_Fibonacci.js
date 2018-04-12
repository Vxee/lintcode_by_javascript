/**
 * @param n: an integer
 * @return: an ineger f(n)
 */
var cache = {}; 
cache[1] = 0;
cache[2] = 1;
const fibonacci = function (n) {
    if(cache[n] === undefined){
        cache[n] = (fibonacci(n-1)+fibonacci(n-2));
    }
    return cache[n];
}
