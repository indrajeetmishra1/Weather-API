var request = require ('request');
console.log('app is starting');
var getGeoLocation=(address)=>{

    var inputContent=encodeURIComponent(address)+'&key=AIzaSyAW7CamNQCJ09WXyjjGvjZUEcjcnsK4if4';
       return new Promise((resolve,reject)=>{

        request(`https://maps.googleapis.com/maps/api/geocode/json?address=${inputContent}`
        ,(err,res,body)=>{

            if (err)
            {
                reject('not able to connect to the server');
            }
            else{
                resolve({
            
                    latitude:JSON.parse(body).results[0].geometry.location.lat,
                    longitude:JSON.parse(body).results[0].geometry.location.lng 

                });
            }

        })

    })
}

    // getGeoLocation('17506')
    // .then((res)=>{console.log(res)}).catch((err)=>{console.log(err)});


 module.exports={

    getGeoLocation
 }   

   




