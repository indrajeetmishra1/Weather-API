var getUser=(id,callback)=>{

var user={
          name:'Indrajeet',
          id
     }

     setTimeout(()=>{callback(user);},3000)

     
    
}

getUser(34,(userobject)=>{console.log(userobject)});