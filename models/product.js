const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required:true
    },
    price: {
        type: Number,
        min:0,
        required:true
    },
    img: {
        type: String,
        trim:true,
        default:'/images/product.jpg',
        required:true
    },
    desc: { 
        type: String,
        trim:true,
        required:true
    },
    type:{
        type: String,
        trim:true,
        required:true
    },
   category: {
        type: String,
        trim:true,
        required:true
   },
   reviews: [
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Review'
        }
    ]
});


const Product = mongoose.model('Product', productSchema);



module.exports = Product;