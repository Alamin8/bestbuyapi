const Products = require('../models/uploadAllProductsModel');
const csv = require('csvtojson');

const productCtrl ={

    // This is get as MRP
    getAllProducts:async (req, res) => {
        try{
            const allProducts = await Products.find().limit(500);
            res.json(allProducts);
        }catch(error){
            res.send({status:400, success: false, msg:error.message});
        }
    },
    getQueryProducts:async (req, res) => {
        try{
            const product = await products.findById(req.user.id);
        }catch{

        }
    },
    uploadAllProducts:async (req, res) => {
        try{
            var products = [];
            csv()
            .fromFile(req.file.path)
            .then( async (response)=>{
                for(var x=0; x < response.length; x++){
                    products.push({
                        product_group: response[x].product_group,
                        product_class: response[x].product_class,
                        item_code: response[x].item_code,
                        product_name: response[x].product_name,
                        vendor_name: response[x].vendor_name,
                        mrp: response[x].mrp,
                        barcode: response[x].barcode,
                    });
                };
                await Products.insertMany(products);
            })
            res.send({status:200, success: true, msg:'Ok Done'});
        }catch(error){
            res.send({status:400, success: false, msg:error.message});
        }
    },
    uploadSingleProducts:async (req, res) => {
        try{

        }catch{

        }
    },

}

module.exports =productCtrl;