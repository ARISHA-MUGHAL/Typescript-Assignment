function storeCarInfo(manufacture:string , modelName : string , ...additionalFeatures : {[key:string] : any} []): object{
    const carInfo ={
     manufacture ,
     modelName ,
     ...Object.assign({} , ...additionalFeatures)
    };
    return carInfo;
     
 };
 
 let Info = storeCarInfo("margalla" , "suzuki" , {color : "black" } , {features : [" free wifi" , "Downloaded songs" ]} , {wheels : 5})
 console.log(Info);