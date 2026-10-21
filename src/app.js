import express from 'express';
const app=express();
import multer, { memoryStorage } from 'multer';
import uploadFile from '../services/storage.services.js';
import postModel from '../models/post.model.js';
app.use(express.json());
// app.use(express.urlencoded({extended: true}));
const upload = multer({storage: multer.memoryStorage()});
// const upload = multer();
app.post('/post', upload.single("image"), async (req, res)=>{
    let result = await uploadFile(req.file);
    console.log(result);
    let data={
       image: result.url,
       description: req.body.description
    };
    await postModel.create(data);
    res.json({message: "posted successfully"});
})
app.get('/allposts', async(req, res)=>{
    let result = await postModel.find();
    res.json({message: "success", result});
})
export default app;