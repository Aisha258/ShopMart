const model = require('./formmodel')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

// post api
const add = async (req, res) => {
    const { fname, lname, adress, email, mobile, password } = req.body;

    try {
        // Check if user already exists
        let user = await model.findOne({ email });
        if (user) {
            return res.status(400).json({ msg: 'User already exists' });
        }

        // Hash the password before saving
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create a new user
        const newUser = new model({
            fname, lname, adress, email, mobile, password:hashedPassword
        });

        await newUser.save();

        // Generate JWT Token
        const token = jwt.sign(
            { userId: newUser._id },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.status(201).json({ msg: "User registered successfully", token, userId: newUser._id });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "Server Error" });
    }
};

// POST API: Login User
const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        let user = await model.findOne({ email });
        if (!user) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }

        // Compare the hashed password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }

        // Generate JWT Token
        const token = jwt.sign(
            { userId: user._id },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.status(200).json({
            msg: "Login successful",
            token,
            userId: user._id
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "Server Error" });
    }
};

// get api
const test=async(req,res)=>{
    try{
        const data=await model.find({});
        res.status(200).send({data});
    }

    catch(error)
    {
        console.log(error);
    }
}

// get one api
const getOne=async(req,res)=>{
    try{
        const{id}=req.params;
        const data=await model.findOne({ _id: id });
        res.status(200).send(data);
    }
    catch(error)
    {
        console.log(error);
    }
}

// get one api from id
const getOneId=async(req,res)=>{
    try{
        const{id}=req.params;
        const data=await model.findById({_id:id});
        res.status(200).send(data);
    }
    catch(error)
    {
        console.log(error);
    }
}

// delete the data from with id
const deleteOne=async(req,res)=>{
    try{
        const{id}=req.params;
        const data=await model.deleteOne({ _id: id });
        res.status(200).send(data);
    }
    catch(error)
    {
        console.log(error);
    }
}


// update data with id
const updateOne=async(req,res)=>{
const {fname,
    lname,
    adress,
    email,
    mobile,
    password}=req.body;

    try
    {
        const data=await model.updateOne(
            {_id:req.params.id},

            {
                $set:{
                    fname,
                    lname,
                    adress,
                    email,
                    mobile,
                    password,
                }
            },
        )
        res.status(200).send(data);   
    }
    catch(error)
    {
        console.log(error);
    }


}

module.exports={add,login,test,getOne,getOneId,deleteOne,updateOne};
