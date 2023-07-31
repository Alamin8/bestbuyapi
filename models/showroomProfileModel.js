const mongoose = require('mongoose');
const showroomProfileSchema = new mongoose.Schema({
    showroom_code:{
        type:String,
        required: true
    },
    showroom_party_code:{
        type:String,
        required: true,
    },
    showroom_name:{
        type:String,
        required: true,
        trim: true
    },
    showroom_email:{
        type:String,
        required: true,
        unique: true
    },
    showroom_mobile:{
        type:String,
        required: true,
        unique: true
    },
    showroom_address:{
        type:String,
        required: true,
    },
    showroom_status:{
        type:Number,
        default: 0  
    },
    current_inventory_name:{
        type:String,
        default: ''  
    },
    create_at:{
        type: Date,
        default: Date.now(),
    },
    showroom_staff:{
        type:Array,
        default:[]
    },
    imagelink:{
        type:String,
        default: '',
    },
    
}, {
    timestamps: true
})

module.exports=mongoose.model('ShowroomProfileData', showroomProfileSchema)