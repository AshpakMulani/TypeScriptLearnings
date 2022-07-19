// Functions can also assigned with return value. In below example explicit mention of 
// 'number' as return type is done. If no return type is defined then it is automatically
// inferred using return type
function add(num1, num2) {
    console.log(num1);
    console.log(num2);
    return num1 + num2;
}
console.log(add(5, 3));
// when we are not returning anything from fuction then TypeScript  inferes it as 'void'. 
// Note 'void' type doesnt really exists in java script. This is part of TypeScript.
function hello(name) {
    console.log("Hello, " + name);
}
console.log(hello('john'));
// this will print 'undefined' because in javascript there is no 'void' type.
// To add more to confusion typescrit also have type 'undefined' but we will not
// discuss about it now..
//====  'Function' Type =======
// We can specify return type as function to a variable which is going to store 
// a function.
var addnum;
addnum = add; // astoring add (defined on top) function in a variable. This is normal JS.
console.log(addnum(5, 8)); // this will print 13 normally
//on of the problem is even if we pass only single argument to function it wont give any error
//because javascript takes 'undefined' as value if it doent exists. 
// Following code call with print 5, 'undefined', 'NaN'  without giving any error
console.log(addnum(5));
// to avoide above situation TypeScript provide even more checks by defining params
// and return type of a function.
//(arg1:Type, arg2:Type) => returnType is syntax for annotating the return type as function
var addnum1;
//now this wont be allowed as TypeScript knows function signature
//console.log(addnum1(5));
//Function return type is usefull when we pass-in call back function 
// as a argument to another function
function addAndHandle(num1, num2, cb) {
    var result = num1 + num2;
    cb(result);
}
addAndHandle(10, 2, function (n) { console.log(n); });
///============== Never return type ==================
// There can be some funcitons whic doesnt returns control flow back and just
// ends the current flow. Ex. function whihc generates error objects and throw
// error. 
function genError(errorCode, errorMessage) {
    throw { errcode: errorCode, message: errorMessage };
}
console.log(genError(405, 'Access is denied'));
// Here console.log doesnt log anything like 'undefined' or something because genError
// function is breaking the flow. 
// NEVER type is used for such types of functions.
