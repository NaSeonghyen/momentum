function sayHello(nameOfPerson, age){
    console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
}

function plus(firstNumber,secondNumber) {
    console.log(firstNumber + secondNumber);
}

function divide(firstNumber,secondNumber) {
    console.log(firstNumber / secondNumber);
}

const player = {
    name: "seong",
    sayHello: function(otherPersonName){
        console.log("hello " + otherPersonName + " nice to meet you")
    },
};

sayHello("nico", 10);
sayHello("dal", 23);
sayHello("lynn"), 21;

plus(8,60);
divide(98,20);

player.sayHello("lynn");
player.sayHello("hyun");