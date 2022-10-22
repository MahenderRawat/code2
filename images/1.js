this.table = 'window table';
console.log(window.table);
const cleanTable = function(soap){
    console.log(`cleaning ${this.table} using ${soap}`);
};

cleanTable.call(this, 'some soap');


this.garage = {
    table: 'garage table',
    cleanTable(){
        console.log(`cleaning ${this.table}`)
    }
};

console.log(window.garage.table);

let johnsRoom = {
    table: 'johns table',
    cleanTable(){
        console.log(`cleaning ${this.table}`)
    }
};

console.log(this.johnsRoom.table)  it can't be accessed like this.

console.log(johnsRoom.table);

johnsRoom.cleanTable();
this.garage.cleanTable();

let createRoom = function(name){
    this.table =`${name}s table`
}

createRoom.prototype.cleanTable = function(soap){
    console.log(`cleaning ${this.table} using ${soap}`);
};

const jillsRoom = new createRoom('jill');
const johnsRoom = new createRoom('john');

jillsRoom.cleanTable('some soap');
johnsRoom.cleanTable('some soap');


// USING CLASSES

class createRoom{
    constructor(name){
        this.table = `${name}s table`
    }
    cleanTable(soap){
        console.log(`cleaning ${this.table} using ${soap}`);
    }
}

const jillsRoom = new createRoom('jill');
const johnsRoom = new createRoom('john');

jillsRoom.cleanTable('some soap');
johnsRoom.cleanTable('some soap');

// FAT ARROW FUNCTION

"use strict"

// var getA = function(a){
//     return a;
// }

let getA = a => a;

console.log(getA(1));

// let square = a => a*a;


let square = (a) => {return a*a};

console.log(square(3));

let multip = (a,b)  => {return a*b};

console.log(multip(8,7));


var x = function(){

    this.val = 1;
    setTimeout(() => {
        this.val++;
        console.log(this.val)
    })
};

var xx = new x();

var x = function(){
    console.log(arguments[0])
};

x(1,2,3);

by using fat arrow functions

var y = (...n) => {
    console.log(n[0]);
};

y(3,4,5);

2nd deliverable

class student{

    static count=0;  //static variable to call

    

   constructor(name,age,pho_num,marks){

       this.name=name;

       this.age=age;

       this.pho_num=pho_num;

       this.marks=marks;

       student.countStudent();

   }

   static countStudent(){

       

       return(student.count++);     //this is how u access static variable

   }

   eligible(){

       if(this.marks >=40){

           console.log(`${this.name} age ${this.age} is eligible`);

       }

       else if(this.marks<40){

           console.log(`${this.name} age ${this.age} is not eligible`);

       }

    }

    egligibleForPlacements(minAge){
        
       return (minMarks) => {

        if(this.marks >= minMarks && this.age >= minAge){
            console.log(`${this.name} is eligible for the placements`);
        }
        else{
            console.log(`${this.name} is not eligible for the placements`);
        }
       }

}
}

const Riya=new student('Riya',15,1234,34);

const Hiya=new student('Hiya',18,2345,36);

const Diya=new student('Diya',16,4567,60);

const Siya=new student('Siya',17,7891,70);

const Rooh=new student('Rooh',19,3456,80);

console.log(student.countStudent());

Riya.eligible();

Hiya.eligible();

Diya.eligible();

Siya.eligible();

Rooh.eligible();

Riya.egligibleForPlacements(18)(36);
Hiya.egligibleForPlacements(18)(36);
Diya.egligibleForPlacements(18)(36);
Siya.egligibleForPlacements(18)(36);
Rooh.egligibleForPlacements(18)(36);



