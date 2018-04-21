/**
 * @param numbers: An array of Integer
 * @param target: target = numbers[index1] + numbers[index2]
 * @return: [index1 + 1, index2 + 1] (index1 < index2)
 */
const twoSum = function (numbers, target) {
    var map = new Map();
    for(n in numbers){
        var index = map.get(target - numbers[n]);
        if(index == null){
            map.set(numbers[n],n);
        }else{
            return [parseInt(index),parseInt(n)];
        }
    }
    return [0,0];
}


