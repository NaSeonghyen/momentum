// const : 상수 선언
// let   : 변수 선언
// var 사용은 지향 : 값 보호를 못함, 상수인지 변수인지 구분이 안됨.(let이랑 비슷함.)
// 항상 const, let 가끔, var은 거의 사용 안함.
const a = 5;
const b = 2;
let myName = "hyun";

console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log("hello " + myName);

myName = "Seong";
console.log("your new name is " + myName);