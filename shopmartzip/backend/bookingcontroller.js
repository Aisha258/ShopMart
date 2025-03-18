const model = require('./bookingmodel')

// post api
const add2= async(req,res)=>{
    const { pname,
        cname,
        clname,
        mobile,
        price,
        ptype
    }=req.body;

    try{

        const userData=new model({
            pname,
        cname,
        clname,
        mobile,
        price,
        ptype
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
const test2=async(req,res)=>{
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
const getOne2=async(req,res)=>{
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
const getOneId2=async(req,res)=>{
    try{
        const{id}=req.params;
        const data=await model.findById({_id:id});
        res.status(200).send(data);
    }
    catch(error)
    {
        console.log(error);
    }
}

// delete the data from with id
const deleteOne2=async(req,res)=>{
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
const updateOne2=async(req,res)=>{
const {pname,
    cname,
    clname,
    mobile,
    price,
    ptype}=req.body;

    try
    {
        const data=await model.updateOne(
            {_id:req.params.id},

            {
                $set:{
                    pname,
                    cname,
                    clname,
                    mobile,
                    price,
                    ptype
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

module.exports={add2,test2,getOne2,getOneId2,deleteOne2,updateOne2};
