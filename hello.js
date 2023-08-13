const http = require('http');

// function requestListner(req,res){

// }


let server = http.createServer((req,res)=>{
    // console.log("Shubhajit Das");
    // console.log(req.url,req.method,req.headers);
    const url = req.url;
    if(url === '/home'){
    res.write('<html>');
    res.write("<head><title>My First Page</title></head>");
    res.write('<body><h1>Welcome Home </h1></body>')
    res.write('</html>');
    return res.end(); 
    }
    if(url==='/about'){
    res.write('<html>');
    res.write("<head><title>My First Page</title></head>");
    res.write('<body><h1>Welcome to About us page </h1></body>')
    res.write('</html>');
    return res.end();
    } 
    if(url==='/node'){
    res.write('<html>');
    res.write("<head><title>My First Page</title></head>");
    res.write('<body><h1>Welcome to my Node Js project </h1></body>')
    res.write('</html>');
    return res.end();
    }
    // res.setHeader('Content-type','text/html');
    // res.write('<html>');
    // res.write("<head><title>My First Page</title></head>");
    // res.write('<body><h1>Welcome to my Node Js project </h1></body>')
    // res.write('</html>');
    // res.end();
});

server.listen(4000);