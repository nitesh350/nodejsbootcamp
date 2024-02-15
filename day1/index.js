const fs = require('fs');
const show = fs.readFileSync('./node-farm/read.text', 'utf-8');
console.log(show)

const textout = `What i want to be in future is : ${show}.\n created on ${Date.now()}`;
fs.writeFileSync('./node-farm/empty.text',textout);
