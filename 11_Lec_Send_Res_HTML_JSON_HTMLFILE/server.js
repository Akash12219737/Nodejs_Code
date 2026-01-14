import express from 'express'
import path from 'path'
import { title } from 'process';

const app = express();

const products =[
    {title: 'Samsung S24' , price: 150000},
    {title: 'CMF PHONE 1' , price: 15000},
    {title: 'CMF PHONE 3A' , price: 170000},
    {title: 'Samsung S20' , price: 30000}
];

// send response 
app.get('/',(req,res)=>{

    // for the json file request
    // res.json({
    //     message : "Fetched all product",
    //     jo_chae: "de sakte ho",
    //     product: products,
    //     success: true
    // })

    // For the HTML
    // res.send('<h1>I am learning Express.js</h1>')


    // For the HTML File
    const dir = path.resolve();
    // console.log("My path = ",dir)
    const url = path.join(dir, './index.html')
    console.log("Full path = ", url)
    const name = 'RAM'
    res.sendFile(url)


    
})

const port = 3000;
app.listen(port, ()=> console.log(` server is running on port ${port}`))