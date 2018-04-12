/**
 * @param n: A long integer
 * @return: An integer, denote the number of trailing zeros in n!
 */
const trailingZeros = function (n) {
    var index = 5;
    var sum = 0;
    while(n/index !== 0 ){
        sum+=Math.floor(n/index);
        index*=5;
    }
    return sum;
}


