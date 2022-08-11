const http = require('http');
const fs = require('fs');
const _= require('lodash');

const server = http.createServer((req, res)=>
{
            // lodash
            
            const num = _.random(0, 69);
            console.log(num);

            const greet= _.once( ()=>{
                console.log('hello');
            });


            greet();
            greet();


    res.setHeader('content-type','text/html');
    fs.readFile('./index.html' , (err,data)=>{
            if(err)
            {
            console.log(err);
            res.end();
            }
            else
            { 
            res.write(data);
            res.end();
            }
    });

})

server.listen(3000,'localhost',()=>{
    console.log("server started at port 3000");
});