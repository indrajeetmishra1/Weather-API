const request=require('request');

var getWeatherInfo=(lang,lat,callback)=>{


    _url=`https://api.darksky.net/forecast/3daa063aa7faa97ac020860612fa3f65/${lang},${lat}`

request(_url,(error,response,body)=>{

    if(!error && response.statusCode===200)
    {

        callback(undefined,
            {
               latitude: JSON.parse(body).latitude,
               longitude:JSON.parse(body).longitude,
               summary:JSON.parse(body).currently.summary,
               temperature:JSON.parse(body).currently.temperature,

            });
       
    }  

    else{
        callback('Unable to connect to the server',undefined);
         }

 

});

}

// module.exports={
//     getWeatherInfo
// }