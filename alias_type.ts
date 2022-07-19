/* Type Alias allow us to define type with name to the type
and use that name letter to reference type
*/

type EmpAge = number;
type EmpDetails = {
    name : string,
    empid : string,
    band : number
}

// Above two are alias which we can use while defining variables. This way we can reuse
// once defined types while defining variables on MutationObserver;tiple places

let age : EmpAge;
age = 50;


let emp : EmpDetails;

emp = {
    name : 'John',
    empid : '2',
    band : 5
}

