import { log } from "console";

let guest_list : string[] = ['Tayyab ur rehman' , 'aqib ur rehman' , 'badar'];

// for(let i=0; i<guest_list.length; i++ ){ 
//     console.log( 'Assalam-u- alaikum '+ guest_list[i]+ ',\n\nYou are invited to a dinner party at my place \n\nThankyou!!\n\n')
// }
let absent_guest : string = 'badar';
let new_guestlist : string= 'saqib ur rehman';
guest_list[2] =new_guestlist ;

for(let i=0; i<guest_list.length; i++ ){ 
    console.log( 'Assalam-u- alaikum '+ guest_list[i]+ ',\n\nYou are invited to a dinner party at my place \n\nThankyou!!\n\n')
}



console.log(` Ms . ${absent_guest} is not coming for dinner due to some issue`) ;

console.log('Exiting news!! we have secured a large table to accommodate three additional guests');


guest_list.unshift('rahila babar'); //unshift = add a new element to the beginning of array
guest_list.splice(2,0,'Mohammad babar'); //splice = add or remove element at a specific index
guest_list.push('zunairah'); // push= add element to the end of array


for(let i=0; i<guest_list.length; i++ ){ 
    console.log( 'Assalam-u- alaikum '+ guest_list[i]+ ',\n\nYou are invited to a dinner party at my place \n\nThankyou!!\n\n')
}


//print a message indicating the number of people you are inviting to dinner.
console.log(`Total number of guest are : ${guest_list.length} `);
