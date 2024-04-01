 let magician : string[]= ["harry potter", "hermione granger", "ron weasly", "albus dumbledore"];

 function copy_array(arr: string[]){
   return [...arr]
 }
 function make_great ( magicianarray: string[]){

    for( let i=0; i<magicianarray.length; i++){
        magicianarray[i] = "The Great " + magicianarray[i]
    }
}

function  show_magicians(magicians:string[]){
    magicians.forEach(names => { 
        console.log(names);
        
        
    });

}
const magiciancopyarr = copy_array(magician)
make_great(magiciancopyarr)
console.log( "\n\nthis is my original array :");

show_magicians(magician)
console.log("\n\nthis is my modiefied copy array:");

show_magicians(magiciancopyarr)