const mongoose = require('module');

const tagsSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    description: {
        type:String,
    },
    course: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Course",
    },

});

module.exports = mongoose.module('Tag',tagsSchema);