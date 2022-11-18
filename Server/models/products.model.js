// Import mongoose to build a model
const mongoose = require('mongoose');


// The Schema
const ProductSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "{PATH} is required"],
        minlength: [3, "{PATH} must be at least 3 charaters long"]

    },

    image:{
        type: String,
        required: [true, "Provide an {PATH} of your product"]
    },

    catagory:{
        type: String,
        required: [true, "{PATH} is required"],
        minlength: [3, "{PATH} must be at least 3 charaters long"]
    },

    price:{
        type: Number,
        required: [true, "{PATH} is required"],
        
    },
    quantity:{
        type: Number,
        required: [true, "{PATH} is required"],
        
    }

}, {timestamps: true})

//Creat the schema and export it
const Product = mongoose.model("Product", ProductSchema);
module.exports = Product