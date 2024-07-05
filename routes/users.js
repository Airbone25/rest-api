const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/',(req,res)=>{
    res.send("Hello REST api");
})

router.post('/',async (req,res)=>{
    const user = new User({
        name: req.body.name,
        age: req.body.age
    })

    const newUser = await user.save();
    res.status(201).json(newUser);
})

module.exports = router;