const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/',async (req,res)=>{
    try{
        const users = await User.find();
        res.json(users);
    }catch(error){
        res.status(500).json({message: error.message});
    }
})

router.post('/',async (req,res)=>{
    const user = new User({
        name: req.body.name,
        age: req.body.age
    })

    const newUser = await user.save();
    res.status(201).json(newUser);
})

router.delete('/:id',getUser,async (req,res)=>{
    await res.user.deleteOne();
    res.json({message: 'User is removed'})
})

async function getUser(req,res,next){
    let user;
    user = await User.findById(req.params.id)
    if(user==null){
        res.status(404).json({message: 'Cannot Find User'})
    }

    res.user = user
    next()
}

module.exports = router;