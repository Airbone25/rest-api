require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect(process.env.DATA_URL);
const db = mongoose.connection
db.once('open',()=>{
    console.log('Connected to database');
})

app.use(express.json());

const user_router = require('./routes/users');
app.use('/users',user_router)

app.listen(3000,()=>{
    console.log('Server is running smooth!');
})