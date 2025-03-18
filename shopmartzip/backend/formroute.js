const { add,test,getOne,getOneId,deleteOne,updateOne,login} = require ('./formcontroller')
const express=require("express");
const Controller=require('./formcontroller');

const route=express.Router();

// const {photoUpload}=require('./UploadFiles');

route.post('/register',add);
route.post('/logincheck',login);
route.get('/getdata',test);
route.get('/getone/:id',getOne);
route.get('/data/:id',getOneId);
route.delete('/delete/:id',deleteOne);
route.put('/update/:id',updateOne);

module.exports=route;