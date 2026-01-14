import express from 'express'

const app = express();

// Routing
app.get('/',(req,res)=>{
    res.send("You are requested for home route")});

// One more routing
app.get('/internship',(req,res)=>{
    res.send("Here is some info about intern")
})

const port = 3000;
app.listen(port,()=> console.log(`server is running on ${port}`))