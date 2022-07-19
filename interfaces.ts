/* Interfaces are the same as type aliases but applicable to objects.
We can define interface and then apply it on variable to follow
same structure while getting new value.

*/

interface Car {
    Make: string,
    Model : number,
    Details : {
        Transmission : 'Automatic' | 'Manual',
        Color : string,
        WheelBase :  number
    }
  }
  

let city_honda : Car ;

city_honda = {
    Make : 'VDI',
    Model : 2019,
    Details : {
        Transmission : 'Automatic',
        Color : 'Blue',
        WheelBase : 12.8
    }
}



// Existing interfaces cal also be extended to add more fields

