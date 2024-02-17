const http = require('http');

const serve = http.createServer((req, res)=>{
    const pathname = req.url;
    if(pathname==="/" || pathname==="overview"){
        res.end("i am overview page");
    }else if(pathname==="/products"){
        res.end('i am products page');
    }else(
        res.end("server errro not found page")
    )   
});
serve.listen(`8000`,`127.0.0.1`,()=>{
    console.log("serve is runing in port number 8000.")
});