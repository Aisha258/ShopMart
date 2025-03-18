const mongoose = require('mongoose');

const myProject = new mongoose.Schema({
    pname:String,
    cname:String,
    clname:String,
    mobile:Number,
    price:Number,
    ptype:String
   
});
module.exports= mongoose.model('bookings',myProject);