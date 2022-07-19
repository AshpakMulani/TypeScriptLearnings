/*
Arrays in JavaScript can be of any type like we can store strings, numbers etc...
in same array. All items should not be of same type.
*/
// In typecript we get option to define arrary type like all items should be
// string or number etc..
var employees;
employees = ['steve', 'michael', 'roger'];
// 'employees'array type is string and we can not store integer in it like shown below.
// employees = ['steve',112,'roger',11.0] --> not allowed in above example 
var employee1 = ['steve', 123, 'roger'];
// above mentioned array is allowing us to store any type of value in same array
// like javascript because TypeScript inferring it as of type Any[] or of 
// type union (string | number)...this 'union', 'any'  type we will see later..
// We should avoide using Any type in Typescript wherever we can in array, because
// it doesnt really help  then in avoiding errors. Ex below
var employee2 = ['emp1', 'emp2', 'emp3'];
for (var _i = 0, employee2_1 = employee2; _i < employee2_1.length; _i++) {
    var emp = employee2_1[_i];
    console.log(emp.toUpperCase());
}
