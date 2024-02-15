const { error } = require('console');
const fs = require('fs');
//Blocking , synchrnous was , mean one code has to wait untill another is excuded
// const show = fs.readFileSync('./node-farm/read.text', 'utf-8');
// console.log(show)
// const textout = `What i want to be in future is : ${show}.\n created on ${Date.now()}`;
// fs.writeFileSync('./node-farm/empty.text',textout);


// same function using  Non-blocking , asynchronous way 
fs.readFile('./node-farm/sync.text','utf-8',(error,data) =>{
    //in data we gets read text that is in sync.text file
    fs.readFile(`./node-farm/${data}.text`,'utf-8',(error,data2) =>{
        //dats2 is computure read.text file data
        console.log(data2)
        // behaviour of asynchronous non blocking code 
    });
    
});
console.log("this line should come first.")