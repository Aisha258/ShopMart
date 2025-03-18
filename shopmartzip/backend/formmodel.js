const mongoose = require('mongoose');

const myProject = new mongoose.Schema({
    fname:String,
    lname:String,
    adress:String,
    email:String,
    mobile:Number,
    password:String,
});
module.exports= mongoose.model('user',myProject);
