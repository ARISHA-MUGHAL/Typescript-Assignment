 let magician : string[]= ["harry potter", "hermione granger", "ron weasly", "albus dumbledore"];

 function make_great ( magicianarray: string[]){

    for( let i=0; i<magicianarray.length; i++){
        magician[i] = "the great " + magicianarray[i]
    }
}

function  show_magicians(magicians:string[]){
    magicians.forEach(names => { 
        console.log(names);
        
        
    });

}
make_great(magician)
show_magicians(magician)