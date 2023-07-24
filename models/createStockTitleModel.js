const mongoose = require('mongoose')
const createStockTitleSchema = new mongoose.Schema({
    stock_title:{
        type:String,
        required: true
    }

}, {
    timestamps: true
})

module.exports=mongoose.model('StockTitle', createStockTitleSchema)