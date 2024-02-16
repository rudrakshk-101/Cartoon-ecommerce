const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const userController = {};

userController.register = async (req,res) => {
    try{
        const {name,email,password} = req.body;
        const existingUser = await User.findOne({email: email});
        if(existingUser) return res.status(400).json({message: "Email already exists"});
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({name,email,password:hashedPassword});
        await newUser.save();
        return res.status(200).json({message:"User registration successful"});
    }catch(error)
    {
        console.log(error);
        res.status(500).json({message: "Internal Server Error"});
    }
}

userController.login = async (req, res) => {
    try{
        const {email,password} = req.body;
        const existingUser = await User.findOne({email});
        if(!existingUser) return res.status(404).json({message: "Email does not exists"});
        const validPassword = await bcrypt.compare(password,existingUser.password);
        if(!validPassword) return res.status(404).json({message: "Incorrect password"});
        const token = jwt.sign({_id : existingUser._id},process.env.SECRET_KEY);
        return res.status(200).json({token});
    }catch(error)
    {
        console.log(error);
        res.status(500).json({message: "Internal Server Error"});       
    }
}

// userController.otherFunctinoality = async (req,res)=> {}
module.exports = userController;