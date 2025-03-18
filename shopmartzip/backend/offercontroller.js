const model = require('./offermodel')

// post api
const addoffer= async(req,res)=>{
    const { productname,
        productprice,
        producttype,
        discount
    }=req.body;

    try{

        const userData=new model({
            productname,
productprice,
producttype,
discount
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
const getoffer=async(req,res)=>{
    try{
        const data=await model.find({});
        res.status(200).send({data});
    }

    catch(error)
    {
        console.log(error);
    }
}


// get one api from id
// const getOneId2=async(req,res)=>{
//     try{
//         const{id}=req.params;
//         const data=await model.findById({_id:id});
//         res.status(200).send(data);
//     }
//     catch(error)
//     {
//         console.log(error);
//     }
// }

// delete the data from with id
const deleteOffer=async(req,res)=>{
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


// // update data with id
const updateOffer=async(req,res)=>{
const {productname,
    productprice,
    producttype,
    discount}=req.body;

    try
    {
        const data=await model.updateOne(
            {_id:req.params.id},

            {
                $set:{
                    productname,
                    productprice,
                    producttype,
                    discount
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

module.exports={addoffer,getoffer,deleteOffer,updateOffer};
