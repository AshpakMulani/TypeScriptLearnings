/* Tuple type doesnt exists in JavaScript but TypeScript allows us to
define Tupil. In TS tupil is fixed length of array defining type of data
it accepts. Since this type is not in JavaScript type inference DOESN'T
work while defining tupil. We need to explicitly mention it's a tupil
*/
//in this example TypeScript inferring it as (string|number)[] array
// which will allow us to keep adding any number of elements of
// type number or string.
var emp_role = [123, 'John'];
// If we have to make above example as tupil then we need to 
// explicitly define it like below. We also need to make sure
// sequence of data types.
var emp_role1;
emp_role1 = [123, 'John'];
//above example wont allow more than two values in array, or wont 
// allow if sequence of data type is not followed whiel adding elements
emp_role1.push('okay');
console.log(emp_role1);
