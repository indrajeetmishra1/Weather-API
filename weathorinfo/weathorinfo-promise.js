const request=require('request');

var getWeatherInfo=(lat,lang)=>{


    return new Promise((resolve,reject)=>{

     

    _url=`https://api.darksky.net/forecast/3daa063aa7faa97ac020860612fa3f65/${lang},${lat}`

    request(_url,(error,response,body)=>{
    
        if(!error && response.statusCode===200)
        {
    
            resolve(  
                    {
                   latitude: JSON.parse(body).latitude,
                   longitude:JSON.parse(body).longitude,
                   summary:JSON.parse(body).currently.summary,
                   temperature:JSON.parse(body).currently.temperature,
    
                    }
                  );
           
        }  
    
        else{
            reject('Unable to connect to the server');
             }
    
     
    
    });





    });




}

module.exports={
    getWeatherInfo
}

// getWeatherInfo(40.11,-76.05).then((data)=>{console.log(data)}).catch((errmsg)=>console.log(errmsg));