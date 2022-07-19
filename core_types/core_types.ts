/*    CORE TYPES : number, string, boolean, Any

==========
Below is the problem in javascript.Below code return 44.5
to console output without giving any error
===========


function add(num1, num2){
    return num1+num2;
}

const number1 = '4';
const number2 = 4.5;

const results = add (number1, number2);

console.log(results);

*/

// below code using typescript does not allow to pass string values as arguments
// and avoid errors during compile time even before executing the code.
// same can be annotated for types like string, boolean

function add(num1 : number, num2 : number){
    return num1+num2;
}

const number1 = 4;
const number2 = 4.5;

const results = add (number1, number2);

console.log(results);

// after compilation of this typescript using "tsc <scriptname.ts>"
// it generates scriptname.js which can be referred to in html file.
// since browsers doesn't know how to run typescript we need to
// compile it to javascript and then refet javascript in html


/* 
Type inference: I above example we did not add type annotation 
to variables while defining and assigning them, because TypeScript
automatically infers variable type during its assignment while defining.
*/

const number3 = 2;
/*
in this above line type script inferred/understood we have defined 'number3'
of type number as we have assigned a number to it. So there is no explicit
need for us to tell typescript that its a number using annotation "":number"

//Now if we try assigning a string value in 'number3' then TypeScript with 
// show error since we are assigning string in number type variable.
// number3 = 'new string'  --> this is not allowed.
*/

// if we dont tell typescript what type variable is explicitly while defining 
// without any assignment then it implicitly understands it of type 'Any'
// and allows any type of value in it..
let number4;
number4 = 8.5
number4 = 'my string'

