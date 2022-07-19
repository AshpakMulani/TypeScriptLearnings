/* 
Arrays in JavaScript can be of any type like we can store strings, numbers etc...
in the same array. All items should not be of the same type.
*/

// In typescript we get the option to define array type like all items should be
// string or number etc..

let employees: string[]
employees = ['steve','michael','roger']

// 'employees' array type is string and we can not store integers in it like shown below.
// employees = ['steve',112,'roger',11.0] --> not allowed in above example 

let employee1 = ['steve',123,'roger']

// above mentioned array is allowing us to store any type of value in same array
// like javascript because TypeScript inferring it as of type Any[] or of 
// type union (string | number)...this 'union', 'any'  type we will see later..


// We should avoid using Any type in Typescript wherever we can in an array, because
// it doesn't really help  them in avoiding errors. Ex below we can confidently use string
// operation in for loop because we know every element in it will be string

let employee2 : string[] = ['emp1','emp2','emp3']

for(let emp of employee2){
    console.log(emp.toUpperCase());
}



