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
        type:String,
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
        type:String,
        default : null,
    },
    futureUse3:{
        type:String,
        default : null,
    },
    futureUse4:{
        type:String,
        default : null,
    },
    futureUse5:{
        type:String,
        default : null,
    },
    futureUse6:{
        type:Number,
        default : null,
    },
    futureUse7:{
        type:Number,
        default : null,
    },
    futureUse8:{
        type:Number,
        default : null,
    },
    futureUse9:{
        type:Number,
        default : null,
    },
    futureUse10:{
        type:Number,
        default : null,
    },
    arrayIrem1:{
        type:Array,
        default:[]
    },
    arrayIrem2:{
        type:Array,
        default:[]
    },
    arrayIrem3:{
        type:Array,
        default:[]
    },
    arrayIrem4:{
        type:Array,
        default:[]
    },
    arrayIrem5:{
        type:Array,
        default:[]
    },
}, {
    timestamps: true
})

module.exports=mongoose.model('Products', productsSchema)