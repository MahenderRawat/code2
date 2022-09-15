//CALL, APPLY AND BIND

var obj  = {num: 2}

var addToThis = function(a,b,c){
    return this.num + a + b + c;
}

console.log(addToThis.call(obj,3,4,5));

var arr = [1,3,5]

console.log(addToThis.apply(obj,arr));

var bound = addToThis.bind(obj);

console.log(bound(2,3,1));

var student = {age: 20}

var printAge = function(){
    return this.age;
}


console.log(printAge.call(student));

// CURRYING

let multiply = function (x,y) {
    console.log(x * y);
}

let multiplyByTwo = multiply.bind(this,2);

multiplyByTwo(6);

let multiplyByThree = multiply.bind(this,3);

multiplyByThree(8);

let mutiply = function(x){
    return function(y){
        console.log(x * y);
    }
}

let mutiplyByTwo = mutiply(2);
mutiplyByTwo(3);

let mutiplyByThree = mutiply(3);
mutiplyByThree(4);