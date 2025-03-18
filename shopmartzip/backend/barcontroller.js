const model = require('./barmodel')

// post api
const add1= async(req,res)=>{
    const {
       label, value}=req.body;

    try{
        const userData=new model({
          label,
          value
        })

        const data=await userData.save();
        res.status(200).send({data});

    }

    catch(error)
    {
        console.log(error);
    }
}

// get api
const test1=async(req,res)=>{
    try{
        const data=await model.find({});
        res.status(200).send({data});
    }

    catch(error)
    {
        console.log(error);
    }
}


module.exports={add1,test1};
