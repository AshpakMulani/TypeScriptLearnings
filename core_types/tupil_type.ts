/* Tuple type does not exist in JavaScript but TypeScript allows us to
define Tuple. In TS tuple is a fixed length of array defining type of data 
it accepts. Since this type is not in JavaScript type inference DOESN'T
work while defining tuples. We need to explicitly mention it's a tuple
*/

//in this example TypeScript inferring it as (string|number)[] array
// which will allow us to keep adding any number of elements of
// type number or string.

let emp_role = [123,'John']


// If we have to make the above example as tuple then we need to 
// explicitly define it like below. We also need to make sure
// sequence of data types.
let emp_role1 : [number, string] ;
emp_role1 = [123, 'John']
//above example won't allow more than two values in array, or won't 
// allow if sequence of data type is not followed while adding elements


//Only EXCEPTION or (BUG ??) in TypeScript is, it allows .push() operation
// on tuple since it's a array operation and allows to add new element even if
// tuple rules are breaking. In following example push operation is allowed
// even if it is making array as [123,'john','okay'] which is different from 
// tuple definition [number, string]


emp_role1.push('okay');
console.log(emp_role1);
