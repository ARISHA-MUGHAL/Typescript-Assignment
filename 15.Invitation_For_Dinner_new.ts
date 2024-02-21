let guest_list : string[] = ['Tayyab ur rehman' , 'aqib ur rehman' , 'badar'];

for(let i=0; i<guest_list.length; i++ ){ 
    console.log( 'Assalam-u- alaikum '+ guest_list[i]+ ',\n\nYou are invited to a dinner party at my place \n\nThankyou!!\n\n')
}
let absent_guest : string = 'badar';
let new_guestlist : string= 'saqib ur rehman';
guest_list[2] =new_guestlist ;

for(let i=0; i<guest_list.length; i++ ){ 
    console.log( 'Assalam-u- alaikum '+ guest_list[i]+ ',\n\nYou are invited to a dinner party at my place \n\nThankyou!!\n\n')
}



console.log(` Ms . ${absent_guest} is not coming for dinner due to some issue`) ;
