/**
 * @param A: A string
 * @param B: A string
 * @return: if string A contains all of the characters in B return true else return false
 */
const compareStrings = function (A, B) {
    var arr = new Array(A.length);
    if (!A && B) return false;
    A.split('').forEach(function (x) {
        var index = arr[x.charCodeAt() - "A".charCodeAt()];
        var code = index === undefined ? 1 : (index + 1);
        arr[x.charCodeAt() - "A".charCodeAt()] = code;
    });
    var b = B.split('');
    for (item of b) {
        if (arr[item.charCodeAt() - "A".charCodeAt()] === undefined) return false;
        if(--arr[item.charCodeAt() - "A".charCodeAt()] < 0) return false;
    }
    return true;
}
