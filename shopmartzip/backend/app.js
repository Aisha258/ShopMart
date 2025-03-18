const express=require('express'); // express package import into express variable
const app=express(); // all packages will store into app variable

const cors=require('cors');
const mongoose=require('mongoose');
const route = require('./formroute');
const barRoute = require('./barroute');
const productroute=require('./productroute');
const bookroute=require('./bookingroute');
const offerroute=require('./offerroute');
app.use(cors());

mongoose.connect("mongodb://localhost:27017/dashboard");
app.use('/images', express.static('Images'));

app.use(express.json());
app.use('/',route)
app.use('/',barRoute);
app.use('/',productroute);
app.use('/',bookroute);
app.use('/',offerroute);


app.get("/",(req,res)=>{
    res.send("Welcome To the dashboard design");
});

const PORT=8000;

app.listen(PORT,()=>{
    console.log(`port is running on ${PORT}`);
})
