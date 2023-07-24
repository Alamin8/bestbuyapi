const mongoose = require('mongoose')
const productsSchema = new mongoose.Schema({
    product_group:{
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
    mrp:{
        type:Number,
        required: true,
    },
    barcode:{
        type:String,
        required: true,
    },
    create_at:{
        type: Date,
        default: Date.now(),
    },
    status:{
        type: Boolean,
        default : true,
    },
    imagelink:{
        type:String,
        default: '',
    },
    futureUse1:{
        type:String,
        default : null,
    },
    futureUse2:{
        type:Number,
        default : null,
    },
    arrayIrem1:{
        type:Array,
        default:[]
    },
}, {
    timestamps: true
})

module.exports=mongoose.model('Products', productsSchema)