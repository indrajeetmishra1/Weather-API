const yargs=require ('yargs');
const axios=require('axios');


const argv=yargs
.options({
     a:{
         demand:true,
         alias:'address',
         describe:'address for which weather information need to be fetched',
         string:true
     }

})
.help()
.alias('help','h')
.argv

var inputContent=encodeURIComponent(argv.a)+'&key=AIzaSyAW7CamNQCJ09WXyjjGvjZUEcjcnsK4if4';
var _URL=`https://maps.googleapis.com/maps/api/geocode/json?address=${inputContent}`

axios.get(_URL)
.then(
    (result)=>{

        if(result.data.status==='ZERO_RESULTS')
        {
            throw new Error('Address not found');
        }
        else{
            var lang=result.data.results[0].geometry.location.lng;
            var lat=result.data.results[0].geometry.location.lat;
            var weathor_url=`https://api.darksky.net/forecast/3daa063aa7faa97ac020860612fa3f65/${lang},${lat}`
            return axios.get(weathor_url);
        }
    //    console.log(result.data.status);
    //            console.log(result.data.results[0].geometry.location)
             }
    ).then((_data)=>{

      printdata(_data.data);


    })
.catch((err)=>{
//    console.log(err.response);
//    console.log(err.Error);
    if(err.response===undefined)
    {
        //if()
        console.log(err);
    }
    else if(err.response.status===404)
    {
       console.log('can not connect to the server');
    }
});



var printdata=(result)=>{

    console.log('printing the weather information');
    console.log('---------------------------------');
    console.log(`latitude is: ${result.latitude}`);
    console.log(`longitude is: ${result.longitude}`);
    console.log(`Weather condition is: ${result.currently.summary}`);
    console.log(`Temprature is: ${result.currently.temperature}`);
    
    }