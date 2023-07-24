const mongoose = require('mongoose')
const stockProductSchema = new mongoose.Schema({
    stock_title:{
        type:String,
        required: true,
    },
    product_class:{
        type:String,
        required: true,
    },
    item_code:{
        type:String,
        required: true,
        unique: true
    },
    product_name:{
        type:String,
        required: true,
    },
    vendor_name:{
        type:String,
        required: true,
    },
    stock_qty:{
        type:Number,
        required: true,
    },
    mrp:{
        type:Number,
        required: true,
    },
    barcode:{
        type:String,
        required: true,
    },
    posting_qty:{
        type:Number,
        default: 0,
    }
}, {
    timestamps: true
})

module.exports=mongoose.model('StockProducts', stockProductSchema)