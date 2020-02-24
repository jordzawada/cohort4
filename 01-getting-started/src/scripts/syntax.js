// define attributes / variables
// number
let x= 5;
// string
const greetingPrimary = "Hello you";
// boolean
let y= false;
// array
const arr1 = [1,2,[5,8],"hello", false]
// dictionary / objects
const obj1 = {
    name: "bob",
    arr: arr1,
    kids: x,
}
// undefined
let c;


// sample if / else
let z=0;
if (z>5) {
    console.log( "number is less than 5");
} else {
    console.log( "number is probably larger than 5");
}

// functions
//  parameters
const funct1 = (param1,param2) => {
    return "hello";
}
//  returns
    funct1 (1,2);


// arrays
// add to the front
arr1.unshift("watermelon");
// add to the end
arr1.push("earth");
// update values
arr1[2]; //call the vlaue
arr1[2]=7; //make it 7


// loops 
// for
for (let i=0;i>8;i++){
    console.log(i)
};
// for/in
let a= name;
for (a in obj1){

}
// while
let h=0;
while (h < 10) {
  // code block to be executed
  h++;
  console.log(h);
}
// do while
// do {
//     let lyrics ="the hokey pokey";
//   }
//   while (lyrics != `it's all about`);

// forEach (with array and function)
// arr1.forEach(function(currentValue, index, arr1), thisValue);

// Objects / Dictionaries
// declare object
const obj2 = {
    name: 'jerry',
};
// lookup key to retrieve value
obj2.name;

const function1 = (x) => {
    return "hello";
}

export default function1;