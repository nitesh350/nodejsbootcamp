const http = require('http');
const fs = require('fs');
const tempoverview = fs.readFileSync('./templates/overview.html', 'utf-8');
const tempcard = fs.readFileSync('./templates/templatecard.html', 'utf-8');
const tempproduct = fs.readFileSync('./templates/templateproduct.html', 'utf-8');
const data = fs.readFileSync('./jsondata/data.json', 'utf-8');

const productsdata = JSON.parse(data)

const replacetemplate = (temp, product)=>{
    let output = temp.replace(/{%PRODUCTNAME%}/g, product.productname);
    output = output.replace(/{%ID%}/g, product.id);
    output = output.replace(/{%IMAGE%}/g, product.image);
    output = output.replace(/{%FROM%}/g, product.from);
    output = output.replace(/{%NUTRIENTS%}/g, product.nutrients);
    output = output.replace(/{%QUANTITY%}/g, product.quantity);
    output = output.replace(/{%PRICE%}/g, product.price);
    if(!product.organic) output = output.replace(/{%NOT_ORGANIC%}/g,'not-organic');
    output = output.replace(/{%DESCRIPTION%}/g, product.description);
    return output;

};


const serve = http.createServer((req, res)=>{
    const pathname = req.url;
    if(pathname==="/" || pathname==="overview"){
        const cardhtml = productsdata.map(el=> replacetemplate(tempcard,el))
        const output = tempoverview.replace('{%PRODUCT_CARDS%}',cardhtml);
        res.end(output);
    }else if(pathname==="/products"){
        res.end(tempproduct);
    }else if (pathname==="/api"){
        fs.readFile('./jsondata/data.json',(err, data)=>{
            const productsdata = JSON.parse(data)
            console.log(productsdata);
            res.end(data)
        })
    }
    else(
        res.end("server errro not found page")
    )   
});

serve.listen(`8000`,`127.0.0.1`,()=>{
    console.log("serve is runing in port number 8000.")
});
console.log("i am first")