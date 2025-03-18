const { add2,test2,getOne2,getOneId2,deleteOne2,updateOne2} = require ('./bookingcontroller')
const express=require('express');
const Controller=require('./bookingcontroller');

const route=express.Router();

route.post('/book',add2);
route.get('/getorder',test2);
route.get('/getoneorder/:id',getOne2);
route.get('/dataorder/:id',getOneId2);
route.delete('/deleteorder/:id',deleteOne2);
route.put('/updateorder/:id',updateOne2);

module.exports=route;