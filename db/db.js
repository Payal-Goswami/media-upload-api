import mongoose from 'mongoose';

export default async()=>{
    mongoose.connect(process.env.MONGO_URI)
    .then((res)=>{
        console.log("Connected to DB");
    }).catch((e)=>{
        console.log("Could not connect to DB", e);
    });
}