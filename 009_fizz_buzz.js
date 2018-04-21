/**
 * @param n: An integer
 * @return: A list of strings.
 */
const fizzBuzz = function (n) {
    let list = [];
    for(let i = 1; i <= n; i++){
        if( i % 15 === 0){
            list.push('fizz buzz');
        }else if( i % 3 === 0){
            list.push('fizz');
        }else if( i % 5 === 0){
            list.push('buzz');
        }else{
            list.push(i.toString());
        }
    }
    return list;
}


