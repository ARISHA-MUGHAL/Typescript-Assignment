// Equality test 
console.log("equality test with strings : ", 'apple' === 'apple');
// Inequality test
console.log("inequality test with strings : ", ('apple' as string)!= 'orange');
// test using the lower case function 
console.log("lower case function test : ", 'HELLO'.toLowerCase() === 'hello');
// Numerical tests involving equality
console.log("equality test with numbers : ", 44 === 44);
// Numerical tests involving inequality
console.log("inequality test with numbers : ", (44 as number) !== 84);
// Numerical tests involving greater than
console.log("greater than test : ", 44 > 8);
// Numerical tests involving less than
console.log("less than test : ", 2 < 8);
// Numerical tests involving greater than or equal to
console.log("greater than or equal to test : ", 44 >= 44);
// Numerical tests involving less than or equal to
console.log("less than or equal to test : ", 42 <= 44);
//Test using and operator
console.log("and operator test :", 7<=10 && 7>=6);
//Test using or operator
console.log("or operator test :", 7<=10 || 7<=10);
//Test whether an item is in a array 
const fruits : string[]= ['apple' , 'amrood', 'anar']
console.log('test "apple" is in the array :' , fruits.includes('apple') );
//Test whether an item is not in a array 
console.log('test "mango" is in the array :' , !fruits.includes('mango') );
