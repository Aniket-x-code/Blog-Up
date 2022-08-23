const express = require('express');

// express app 
const app= express();

// listening to request 
app.listen(3000);

// registering view engine
app.set('view engine','ejs')



app.get('/',(req,res)=>{
res.sendFile('./index.html',{root: __dirname});
});


app.get('/about',(req,res)=>{
    res.sendFile('./about.html',{root: __dirname});
});

app.use((req,res)=>{
    res.status(404).res.sendFile('404.html',{root:__dirname});
})
