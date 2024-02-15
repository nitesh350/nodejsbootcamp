const fs = require('fs');
const show = fs.readFileSync('./node-farm/read.text', 'utf-8');
console.log(show)