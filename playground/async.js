console.log('First sentance');

setTimeout(()=>{console.log('in call back')},2000);
setTimeout(()=>{console.log('in call back 2nd')},0);

console.log('third sentance');