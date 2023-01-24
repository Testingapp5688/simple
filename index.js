const express=require('express');

const app=express();
app.get('/user',(req,res)=>{
    res.json({message:"form user"});
});
app.get('/',(req,res)=>{
    res.json({message:"Done the Works"});
});
app.listen();
