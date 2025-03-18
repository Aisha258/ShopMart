const mongoose = require('mongoose');

const myProject = new mongoose.Schema({
    productname:String,
    productprice:String,
    producttype:String,
    discount:Number,
   
});
module.exports= mongoose.model('offers',myProject);
