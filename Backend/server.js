

dotenv.config();


import dotenv from "dotenv"
import express from "express"
import mongoose from "mongoose"
import cors from "cors"

import bookRoute from "./route/bookRoute.js"
import userRoute from "./route/user.route.js"

const app = express();
const port = process.env.PORT || 5000;
const MongoURI = process.env.MongoDB_URI;
app.use(cors());
app.use(express.json());


// connect to mongodb

try {
    mongoose.connect(MongoURI,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    });
    console.log("connected to mongodb");
    
} catch (error) {
    console.log("Error : " , error);
}


app.use("/book",bookRoute);
app.use("/user",userRoute);

app.listen(port,()=>{
    console.log(`Server is running at port ${port}`)
})