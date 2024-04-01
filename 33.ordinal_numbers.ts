let numbers : number[]= [1 , 2 , 3, 4, 5, 6, 7, 8, 9]
for(let num of numbers){
    let ordinal_numbers : string;
    if(num === 1 ){
        ordinal_numbers = "st"
        
    }else if( num === 2 )
{ ordinal_numbers = "nd"}
else if( num === 3 )
{ ordinal_numbers = "rd"}
else{ ordinal_numbers = "th"}

console.log(`${num}${ordinal_numbers}`);}
