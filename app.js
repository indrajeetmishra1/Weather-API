const request=require ('request');
const geocode=require('./geocode/geocode');
const geocode_promise=require('./geocode/geocode-promise');
const yargs=require ('yargs');
const weathorinfo=require('./weathorinfo/weathorinfo');
const weathorinfo_promise=require('./weathorinfo/weathorinfo-promise');

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


geocode_promise.getGeoLocation(argv.a)
.then((data)=>{weathorinfo_promise.getWeatherInfo(data.latitude,data.longitude)
.then((result)=>{printdata(result)}).catch((errmsg)=>{console.log(errmsg)})
})
.catch((err)=>{console.log(err)});

var printdata=(result)=>{

    console.log('printing the weather information');
    console.log('---------------------------------');
    console.log(`latitude is: ${result.latitude}`);
    console.log(`longitude is: ${result.longitude}`);
    console.log(`Weather condition is: ${result.summary}`);
    console.log(`Temprature is: ${result.temperature}`);
    
    }

// geocode.getGeocode(argv.a,(errormsg,result)=>{

// if(errormsg)
// {
//     console.log(errormsg);
// }
// else
// {
//     //console.log(result.latitude);

//    weathorinfo.getWeatherInfo(result.latitude,result.longitude,(error,result)=>{

// if(error)
// {
//     console.log(error);
// }
// else{
// console.log(`latitude is: ${result.latitude}`);
// console.log(`longitude is: ${result.longitude}`);
// console.log(`Weather condition is: ${result.summary}`);
// console.log(`Temprature is: ${result.temperature}`);

// }
//    });
// }

// });
