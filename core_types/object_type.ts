/*  objects in Javascript as JSON objects (python call it dict)

In below example we are simply declaring object and TypeScript is
not complaining about it as it understood 'person' type as 
{name: string, age: number} inferred as we are assigning value 
to it while defining it
*/

const person = {
    name: 'Ashpak',
    age: 35,
};

console.log(person, person.name);


/*

Above object can also be defined like this by specifying type of object 
but it's not required due to type inference 

const person: {
    name: string,
    age: number
} = {
    name: 'Ashpak',
    age: 35,
};


*/


