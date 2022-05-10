const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
    },
    price:{
        type:Number,
        required:true,
        trim:true,
        lowercase:true,
    },
    description:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
    },
    image:{
        type:String,
        trim:true,
        lowercase:true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
})

const Product = mongoose.model("products", ProductSchema);

module.exports = {Product};