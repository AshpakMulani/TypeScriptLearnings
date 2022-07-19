// Functions can also be assigned with return value. In the below example explicit mention of 
// 'number' as return type is done. If no return type is defined then it is automatically
// inferred using return type

function add (num1 : number, num2: number) : number{
    console.log(num1);
    console.log(num2);

    return num1 + num2
}

console.log(add (5,3));



// when we are not returning anything from the function then TypeScript  inferes it as 'void'. 
// Note the 'void' type doesn't really exist in java script. This is part of TypeScript.


function hello(name : string){
    console.log("Hello, " + name);
}


console.log(hello('john')); 
// this will print 'undefined' because in javascript there is no 'void' type.
// To add more to confusion typescript also have type 'undefined' but we will not
// discuss it now..


//====  'Function' Type =======
// We can specify return type as function to a variable which is going to store 
// a function.


let addnum : Function;

addnum = add;  // astoring add (defined on top) function in a variable. This is normal JS.

console.log(addnum(5,8)); // this will print 13 normally

//one of the problems is even if we pass only a single argument to function it wont give any error
//because javascript takes 'undefined' as value if it doesn't exist. 
// Following code call with print 5, 'undefined', 'NaN'  without giving any error
console.log(addnum(5));

// to avoide above situation TypeScript provide even more checks by defining params
// and return type of a function.

//(arg1:Type, arg2:Type) => returnType is syntax for annotating the return type as function

let addnum1 : (n1:number, n2:number) => number

//now this wont be allowed as TypeScript knows function signature
//console.log(addnum1(5));

//Function return type is useful when we pass-in callback function 
// as a argument to another function

function addAndHandle(num1 : number, num2: number, cb : (num : number) => void) {

    let result = num1 + num2;

    cb(result);
}


addAndHandle(10,2, (n) => {console.log(n)})


///============== 'never' return type ==================
// There can be some functions which does not returns control flow back and just
// ends the current flow. Ex. function which generates error objects and throws error. 


function genError(errorCode : number, errorMessage: string) : never{
    throw {errcode: errorCode, message : errorMessage}
}

console.log(genError(405,'Access is denied'));

// Here console.log doesn't log anything like 'undefined' or something because the genError
// function is breaking the flow. 

// NEVER type is used for such types of functions to denote that the function doesn't return 
// the fow.




