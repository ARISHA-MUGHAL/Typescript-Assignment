
//Turn your if-else chain from Exercise 5-4 into an if-else chain.
let alien_color : string = 'green';

// • If the alien is green, print a message that the player earned 5 points.

// • If the alien is yellow, print a message that the player earned 10 points.

// • If the alien is red, print a message that the player earned 15 points.

// • Write three versions of this program, making sure each message is printed for the appropriate color alien. 
// VERSION #1 WHEN COLOR IS GREEN
if(alien_color ==='green' ){
    console.log("version 1 : the player earned 5 points.");
    }else if(alien_color === "yellow"){
    console.log("the player earned 10 points.");
}else if(alien_color === "red"){
    console.log("the player earned 15 points.")
}

// VERSION #2 WHEN COLOR IS YELLOW
 alien_color  = 'yellow'
 if(alien_color ==='green' ){
    console.log("the player earned 5 points.");
    }else if(alien_color === "yellow"){
    console.log("version 2 : the player earned 10 points.");
}else if(alien_color === "red"){
    console.log("the player earned 15 points.")
}

// VERSION #3 WHEN COLOR IS RED
alien_color  = 'red'
if(alien_color ==='green' ){
   console.log("the player earned 5 points.");
   }else if(alien_color === "yellow"){
   console.log("the player earned 10 points.");
}else if(alien_color === "red"){
   console.log("version 3 : the player earned 15 points.")
}
