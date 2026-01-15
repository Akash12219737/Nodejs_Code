import express from 'express'
import mongoose from 'mongoose';
import mangoose from 'mongoose'


const app = express();
mongoose.connect("mongodb+srv://akashmaurya2103_db_user:wJu0hSg3gtWZjEeZ@cluster0.gx1nvdk.mongodb.net/",{
    dbName:"NodeJS Mastery Course"
}).then(()=>console.log("MongoDB Connected..!")).catch((err)=>console.log(err))


const port = 1000;
app.listen(port,()=> console.log(`Server is running on ${port}`))