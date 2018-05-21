const request=require ('request');
var getGeocode=(address,callback)=>{
  
    var inputContent=encodeURIComponent(address)+'&key=AIzaSyAW7CamNQCJ09WXyjjGvjZUEcjcnsK4if4';

    var _URL=`https://maps.googleapis.com/maps/api/geocode/json?address=${inputContent}`;

    var errordata;
    var result;
    
    request(_URL,(error,response,body)=>{
    
         if(error)
        {
            console.log('Can not connect to the google server');
            errordata='Can not connect to the google server';
        }
        else if(JSON.parse(body).status==='ZERO_RESULTS')
        {
            errordata='Address is not found';
        }
        else if(JSON.parse(body).status==='OK')
        {

           // result= `longitude is: ${JSON.parse(body).results[0].geometry.location.lat} and latitude is : ${JSON.parse(body).results[0].geometry.location.lng}`;    
           

           result={
            latitude:JSON.parse(body).results[0].geometry.location.lat,
            longitude:JSON.parse(body).results[0].geometry.location.lng                               
           }



        }
    
        callback(errordata,result);
       
    })



}

module.exports={

    getGeocode

}