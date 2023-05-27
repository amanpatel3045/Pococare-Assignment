const express = require('express')
const mongoose = require('mongoose')
const app = express();
app.use(express.json())

mongoose.connect("mongodb+srv://amanpatel3045:amanpatel3045@cluster0.mrvwy83.mongodb.net/?retryWrites=true&w=majority");

app.listen(3000,function(){
    console.log('Server is running')
})

app.get('/',(req,res)=>{
    res.send("hello world")
})