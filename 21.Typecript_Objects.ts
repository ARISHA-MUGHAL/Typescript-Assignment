//  Write a program that creates Objects containing these items.

import { log } from "console";

let student : student = {
    name: 'ashaan',
    age:24,
    year: '4th',
    cgpa : 3.2,
    isPass: true ,

}
// assigning data type

interface student {
    name: string,
    age: number,
    year: string,
    cgpa : number,
    isPass: boolean
}
console.log(student);

let car = {
    brand : "margalla" ,
    color : "white",
    automatic : true 
}

console.log(car);

interface car {
    brand : string ,
    color : string ,
    automatic : boolean
}
