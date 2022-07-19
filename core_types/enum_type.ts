/* EMUM is not a type in JavaScript. It is introduced by TypeScript as 'custom type'
Convention is to start the name of enum with capital letters.
It is specifically used to store a group of constants.
It can come in two forms 'string' or 'numeric' or mixed as well. 
*/

// ***** Numeric ENUM  ************
// It assigns numbers to each entry default starting with zero.

enum EmpRole {
    admin,
    developer,
    manager,
    support
}


console.log(EmpRole.manager);
//--> logs 2

//we can also assign the starting number for items so that other items
// get number +1 each from the given starting number...
// we can also provide our own numbers to each items like below

enum ERRORCodes {
    SUCCESS = 200,
    ACCESS_DENIED = 404,
    INTERNAL_ERROR = 405,
    BLANK_RESPONSE =201
}


let result = ERRORCodes.SUCCESS;

console.log(result)
//--> Logs 200



//Main advantage here we see is type of 'result' is 'ERRORCodes' which means 
// we won't be making any mistakes while assigning error codes by typing some other 
// error code manually


// ***** String ENUM  ************
// It assigns string to each entry. 


enum CardinalDirections {
    N = 'North',
    E = "East",
    S = "South",
    W = "West",
    NE = "North-East",
    SE = "South-East"
  };
  // logs "North"
  console.log(CardinalDirections.N);
  // logs "West"
  console.log(CardinalDirections.SE);




