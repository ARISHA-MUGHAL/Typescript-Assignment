function makesandwich ( items:string[]){
    console.log("we are going to make sandwich with ");
    for (let index = 0; index <items.length; index++) {
        const element = items[index];
        console.log("- " + element);
    
    }
    console.log("Enjoy your sandwich !!");
    
}
makesandwich(["ham" , "cheese" , "lettuce"])
makesandwich(["ketchup" , "mayo" , "salt"])
makesandwich(["bread" , "mushroom" , "chicken"])