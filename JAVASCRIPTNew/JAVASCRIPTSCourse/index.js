console.log("hello")


//alert("yoo")


//Variable
var b ='smoothie';
//console.log(b);

var someNumber= 45;
//console.log(someNumber);


//var age = prompt("What is your age?");
//document.getElementById('someText').innerHTML = age;

//Numbers in Javascript

// how to increment 
var num1 = 10;
num1++
//num1= num1+1
console.log(num1);

// how to decrement 

//num1=num1-1
num1--
console.log(num1)

// increment or decrement by any number by 10 for example

num1 +=10;
console.log(num1);



// divide, multiply,*, remiander %

console.log(num1 % 5 );

/*function
1. create a function
2. call a function
*/
// Create
function fun(){
    console.log("this is a fucntion");
}
//call
fun();

/* let create a function that take in a name
and says hello followed by your name*/

var name = 'philia';
function Name(){
    console.log("hello"+' '+ name);

}
//Name();
function greeting(yourName){

var result = 'hello' + ' ' + yourName;
console.log(result);
}

//var name = prompt('What is your name?');
//greeting(name);


// How do arguments work in functions?
// How do we add two numbers together in a function
function sumNumbers(num1, num2){
    var result= num1 + num2;
    console.log(result)
}
//sumNumbers(10,10);

// While Loops

var num = 0;

while(num<100){
    num+=1;
    console.log(num)
}


//for Loops

 for(let num =0; num<100; num++){
     console.log(num);
 }


//Datatypes

/* let  yourAge = 18; // number 
 let yourName =" philia" // string
 let name = {first: 'Jane', last: 'Doe'}; // Object
 let truth = false; // boolean 
 let groceries = ["apple","banana", "fruit"]; //array
 let random; //undefined 
 let nothing = null; // value null;
 */

 // strings in Javacript(common method)

 let fruit ="banana, apple, orange";
 let moreFruit= "banana\napple"; // new line
 console.log(moreFruit);

console.log(fruit.length)
console.log(fruit.indexOf("na"))
console.log(fruit.slice(2,4))
console.log(fruit.replace("na", "123"))
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());
console.log(fruit.charAt(5))
console.log(fruit[2]);
console.log(fruit.split(','));// split by comma
console.log(fruit.split(''));// split by character

//Arrays in Javascripts

let fruits= ["banana", "orange","pineapples", "apple"];

 //let fruits = new Array ["banana", "orange", "pineapples", "apple"];

console.log(fruits[1]);// access value at index

fruits[0]= "pear";
console.log(fruits[0]);

for(let i=0; i<fruits.length; i++){
    console.log(fruits[i])
}

// Array common method 

 console.log("to string",fruits.toString());
 console.log(fruits.join('-'));
console.log(fruits, fruits.pop(), fruits);// pop means take off last item
console.log(fruits.push("blackberries"), fruits);  // add

console.log(fruits, fruits[2]="strawberries", fruits)

console.log(fruits[3]);

console.log(fruits.shift()); // remove first element in an array 
 console.log(fruits);




 let vegetables= [" asparagus","tomato","brocolli"];
 let allgroceries= fruits.concat(vegetables)
 console.log(allgroceries);
 console.log(allgroceries.slice(1,4));
 console.log(allgroceries.reverse());
 console.log(allgroceries.sort());


 let someNumbers= [5, 10, 2, 25, 3, 225, 1, 2];
 console.log(someNumbers.sort(function(a,b) {return a - b})) // sorted in ascending order  
console.log(someNumbers.sort(function (a, b) { return b -a  })) // sorted in descendong order

let emptyArray= [];
for(let num =0; num<10; num++){
    emptyArray.push(num);
}

console.log(emptyArray);

// Ojects:

let student = {
    frist: "philippine",
    last: "Tembo", 
    age:29, 
    height: 165,
    studdentInfo: function(){
        return this.frist + '\n' + this.last
    }
}
console.log(student)
console.log(student.frist);
student.frist= "notphilippine"
console.log(student.frist)
student.age++
console.log( student.age)
console.log(student.studdentInfo())

// if conditionals , control flows(if else)
// 18-35 is my target democraphic 

//let age = prompt("what is your age")
let age =45

if( (age >=18 ) && (age <=35) ){
    status = "target demo";
    console.log(status)

}else {
    status="not my audience"
    console.log(status)
}

// swicth statement 
// differenciate between weekday vs weekend 
// day 0 Sunday
// day 6 is satuday 
// day 4 thrusday 

switch(4){
    case 0:
    text ="Weekend"
    break;
    case 5:
        text="weekend"
        break;
    case 6:
        text="weekend"
        break;
    default:
        text="weekdays"
}
 console.log(text)










