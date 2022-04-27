const calcultor = {
    add : function(a, b){
        console.log(a + b);
    },
    minus : function(a, b){
        console.log(a - b);
    },
    mul : function(a, b){
        console.log(a * b);
    }, 
    div : function(a, b){
        console.log(a / b);
    },
    rem : function(a, b){
        console.log(a % b);
    },
    squa : function(a, b){
        console.log(a ** b);
    },
};

calcultor.add(4,5);
calcultor.minus(7,1);
calcultor.mul(2,20);
calcultor.div(40,10);
calcultor.rem(52, 7);
calcultor.squa(3,3);