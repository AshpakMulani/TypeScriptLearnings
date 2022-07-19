/* unio type is used to store values of more than one type as defined.

*/

 let my_value: string|number;

 my_value = 'string value';
 my_value = 10;

 //in above example we are defining my_value to store either 'string' or 'number' value
 // we can allow any type and any number of type like shown below for enum example

 enum MyEnum {Hi, Hello}

 let my_value1: number | string | [number, string] | MyEnum;

 my_value1 = MyEnum.Hi;
 my_value1 = "Hi";


 //**********  LITERAL TYPES *****/

 //We can also restrict values in a variable using literal types  

 let MyVar : 'value1' | 'value2' | 5 | 8;

 //here we allowing only assignment of value in 'MyVar' variable mentioned
 // on right had side
 MyVar = 'value2';   //--> allowed
 // MyVar = 10;   --> not allowed