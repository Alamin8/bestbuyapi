const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    Showroom_code:{
        type:String,
        required: true
    },
    staff_id:{
        type:String,
        required: true
    },
    name:{
        type:String,
        required: true,
        trim: true
    },
    email:{
        type:String,
        required: true,
        unique: true
    },
    password:{
        type:String,
        required: true
    },
    role:{
        type:Number,
        default: 0     //Role 0-SE 1-DSM 2-TSM 3-SM 4-AM 5-INCH 6-COO
    },
    account_status:{
        type:Number,
        default: 0  // Status 0-UnAuthorised 1-Active 2-Hold 3-Blocked 4-Inactive
    },
    online_status:{
        type:Number,
        default: 0  // Status 0-Offline 1-Online
    },
    create_at:{
        type: Date,
        default: Date.now(),
    },
    user_info:{
        type:Array,
        default:[]
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

module.exports=mongoose.model('Users', userSchema)