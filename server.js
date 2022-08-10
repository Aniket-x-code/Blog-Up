const http = require('http');


const server = http.createServer((req, res)=>
{
    console.log(req.url,req.method);
    res.setHeader('content-type','text/plain');
    res.write("helllo this is anikets server");
    res.end();


})

server.listen(3000,'localhost',()=>{
    console.log("server started");
});