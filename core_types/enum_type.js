/* EMUM is not a type in JavaScript. It is intriduced by TypeScript.
It is specifically used to store group of constants.
It can come in two forms 'string' and 'numeric'.
*/
// ***** Numeric ENUM  ************
// It assigns numbers to each entry default starting with zero.
var EmpRole;
(function (EmpRole) {
    EmpRole[EmpRole["admin"] = 0] = "admin";
    EmpRole[EmpRole["developer"] = 1] = "developer";
    EmpRole[EmpRole["manager"] = 2] = "manager";
    EmpRole[EmpRole["support"] = 3] = "support";
})(EmpRole || (EmpRole = {}));
console.log(EmpRole.manager);
//--> logs 2
//we can also assign starting number for items so that other items
// gets number +1 each from given starting number...
// we can also provide our own numbers to each items like below
var ERRORCodes;
(function (ERRORCodes) {
    ERRORCodes[ERRORCodes["SUCCESS"] = 200] = "SUCCESS";
    ERRORCodes[ERRORCodes["ACCESS_DENIED"] = 404] = "ACCESS_DENIED";
    ERRORCodes[ERRORCodes["INTERNAL_ERROR"] = 405] = "INTERNAL_ERROR";
    ERRORCodes[ERRORCodes["BLANK_RESPONSE"] = 201] = "BLANK_RESPONSE";
})(ERRORCodes || (ERRORCodes = {}));
console.log(ERRORCodes.SUCCESS);
//--> Logs 200
// ***** String ENUM  ************
// It assigns string to each entry. 
var CardinalDirections;
(function (CardinalDirections) {
    CardinalDirections["N"] = "North";
    CardinalDirections["E"] = "East";
    CardinalDirections["S"] = "South";
    CardinalDirections["W"] = "West";
    CardinalDirections["NE"] = "North-East";
    CardinalDirections["SE"] = "South-East";
})(CardinalDirections || (CardinalDirections = {}));
;
// logs "North"
console.log(CardinalDirections.N);
// logs "West"
console.log(CardinalDirections.SE);
