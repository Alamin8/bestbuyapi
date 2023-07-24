const csv = require('csvtojson');
const StockTitle = require('../models/createStockTitleModel');
const StockProduct = require('../models/stockProductsUploadModel')





const stockManagementCTRL ={

    createStockTitle:async (req, res) => {
        try{
            const {stock_title} = req.body;
            const newStockTitle = new StockTitle({
                stock_title,
            })
            await newStockTitle.save();
            return res.send({status:200, msg:`${newStockTitle.stock_title} -> Named Stock Title Create Successful!`});
        }catch(error){
            return res.send({status:400, msg:'Something went wrong'});
        }
    },
    getAllStockTitle:async (req, res) => {
        try{
            const stockTitle = await StockTitle.find().sort({ $natural: -1 });
            const totalItems = stockTitle.length;
            return res.json({totalItems, stockTitle});
        }catch(error){
            return res.send({status:400, msg:'Something went wrong'});
        }
    },

    updateStockTitle: async(req, res)=>{
        try {
           const {_id, stock_title}=req.body;
           await StockTitle.findByIdAndUpdate({_id:_id}, {stock_title})
    
            res.json({status:200, msg:"Stock Title Update Success!"})
        } catch (err) {
          return res.status(500).json({ msg: err.message });
        }
    },

    deleteStockTitle: async(req, res)=>{
        try {
            const {_id} = req.body;
            await StockTitle.findByIdAndDelete(_id);
            res.json({status:200, msg:"Stock Title Delete Successfull!"})
    
        } catch (err) {
          return res.status(500).json({ msg: err.message });
        }
    },

    stockUpload: async( req, res)=>{

        try{
            var products = [];
            csv()
            .fromFile(req.file.path)
            .then( async (response)=>{
                for(var x=0; x < response.length; x++){
                    products.push({
                        stock_title: response[x].stock_title,
                        product_class: response[x].product_class,
                        item_code: response[x].item_code,
                        product_name: response[x].product_name,
                        vendor_name: response[x].vendor_name,
                        stock_qty: response[x].stock_qty,
                        mrp: response[x].mrp,
                        barcode: response[x].barcode,
                    });
                };
                await StockProduct.insertMany(products);
            })
             res.send({status:200, msg:'Stock Upload Success!'});
        }catch(error){
            res.send({status:400, msg:'Something went wrong - Stock Upload'});
        }


    }


}

module.exports =stockManagementCTRL;