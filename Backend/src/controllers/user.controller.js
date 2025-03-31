
const userModel = require('../models/user.model');

module.exports.registerController = async function(req,res){
   try {
    const {username,email,password} = req.body;

    const user = await userModel.create({
        username,
        email,
        password
    })
    res.status(200).json({
        user
    })
   }

   catch(err){
    res.status(400).json({
        message:err.message
    })
   }
}