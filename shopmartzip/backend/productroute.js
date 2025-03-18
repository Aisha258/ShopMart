const { add1,test1,getOne1,getOneId1,deleteOne1,updateOne1} = require ('./productcontroller')
const express=require('express');

const route=express.Router();
const {photoUpload}=require('./UploadFiles');

route.post('/addproduct',photoUpload,add1);
route.get('/getproduct',test1);
route.get('/getoneproduct',getOne1);
route.get('/getproduct/:id',getOneId1);
route.delete('/deleteproduct/:id',deleteOne1);
route.put('/updateproduct/:id',photoUpload,updateOne1);

module.exports=route;