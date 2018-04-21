/**
 * @param A: sorted integer array A
 * @param B: sorted integer array B
 * @return: A new sorted integer array
 */
const mergeSortedArray = function (A, B) {
    for(let i = 0; i < B.length; i++){
        A.push(B[i]);
    }
    return A.sort(function(a,b){
        return a-b;
    });
}


