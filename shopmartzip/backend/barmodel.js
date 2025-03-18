const mongoose = require('mongoose');

const myProject = new mongoose.Schema({
  label:String,
  value:Number
});
module.exports= mongoose.model('barchart',myProject);