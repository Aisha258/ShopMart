const { addoffer,getoffer,deleteOffer,updateOffer} = require ('./offercontroller')
const express=require('express');
const Controller=require('./offercontroller');

const route=express.Router();

route.post('/addoffer',addoffer);
route.get('/getoffer',getoffer);
// route.get('/getoneorder/:id',getOne2);
// route.get('/dataorder/:id',getOneId2);
route.delete('/deleteoffer/:id',deleteOffer);
route.put('/updateOffer/:id',updateOffer);

module.exports=route;