//return 예제 소스
/*
const age = 96;
function calculateKrAge(ageOfForeigner){
    return ageOfForeigner + 2;
}

const krAge = calculateKrAge(age);

console.log(krAge);
*/

const calcultor = {
    add : function(a, b){
        return a + b;
    },
    minus : function(a, b){
        return a - b;
    },
    mul : function(a, b){
        return a * b;
    }, 
    div : function(a, b){
        return a / b;
    },
    rem : function(a, b){
        return a % b;
    },
    squa : function(a, b){
        return a ** b;
    },
};

const plusResult = calcultor.add(2,3);
const minusResult = calcultor.minus(plusResult,3);
const timesResult = calcultor.mul(10,minusResult);
const divideResult = calcultor.add(timesResult,plusResult);
const powerResult = calcultor.squa(divideResult,minusResult);