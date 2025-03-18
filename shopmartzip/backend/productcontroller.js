const model = require('./productmodel')

// post api
const add1= async(req,res)=>{
    const { 
        pname,
        price,
        desc,
        productType,
    }=req.body;

    try{

        const userData=new model({
            pname,
            price,
            desc,
            productType,
            image:req.file.filename
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

// get one api
const getOne1=async(req,res)=>{
    try{
        const{id}=req.params;
        const data=await model.findOne({ _id: id });
        res.status(200).send(data);
    }
    catch(error)
    {
        console.log(error);
    }
}

// get one api from id
const getOneId1=async(req,res)=>{
    try{
        const{id}=req.params;
        const data=await model.findById(id);
        res.status(200).send(data);
    }
    catch(error)
    {
        console.log(error);
    }
}

// delete the data from with id
const deleteOne1=async(req,res)=>{
    try{
        const{id}=req.params;
        const data=await model.deleteOne({ _id: id });
        res.status(200).send(data);
    }
    catch(error)
    {
        console.log(error);
    }
}


// update data with id
const updateOne1=async(req,res)=>{
const { pname,
    price
, desc, productType}=req.body;

    try
    {
        const data=await model.updateOne(
            {_id:req.params.id},

            {
                $set:{
                    pname,
                    price,
                    desc,
                    productType
                }
            },
        )

        res.status(200).send(data);   
    }
    catch(error)
    {
        console.log(error);
    }


}

module.exports={add1,test1,getOne1,getOneId1,deleteOne1,updateOne1};
