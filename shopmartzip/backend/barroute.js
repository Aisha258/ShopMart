const { add1,test1} = require ('./barcontroller')
const express=require('express');
const Controller=require('./barcontroller');

const route=express.Router();

route.post('/add',add1);
route.get('/getbar',test1);


module.exports=route;
