const Products = require('../models/uploadAllProductsModel');
const csv = require('csvtojson');



const productCtrl ={

    // This is get as MRP
    getAllProducts:async (req, res) => {
        try{
            const allProducts = await Products.find().limit(300);
            console.log("hit");
            return res.json(allProducts);
        }catch(error){
            return res.send({status:400, success: false, msg:'Something went wrong'});
        }
    },
    getScanQueryProducts:async (req, res) => {
        try{
            const {scanCode} = req.body;
            const scanProduct = await Products.findOne({barcode:scanCode});

            if(!scanProduct){
                const newScanProduct = await Products.findOne({item_code:scanCode});
                if(!newScanProduct){
                   return res.send({status:400, success: false, msg:'No Product Founds'});
                }
                return res.json(newScanProduct);
            }else{
                return res.json(scanProduct);
            }
    
            
        }catch(err){
            return  res.send({status:400, success: false, msg:err.msg});
        }
    },
    getSearchQueryProducts:async (req, res) => {
        try{

            const {searchText} = req.body;
            console.log(searchText);

            const searchProduct = await Products.find({"product_name":{$regex: ".*"+searchText+".*"}}).limit(30);

            
            if(searchProduct.length > 0){
                return res.json(searchProduct);

            }
            else{
                const newsearchProduct = await Products.findOne({barcode:searchText}).limit(10);
                if(!newsearchProduct){
                    const finalsearchProduct = await Products.findOne({item_code:searchText}).limit(10);

                    if(!finalsearchProduct){
                        return res.send({status:400, success: false, msg:'No Product Founds'});
                    }
                    return res.json(finalsearchProduct);
                }
                return res.json(newsearchProduct);
                
            }



         



            
        }catch(err){
            return  res.send({status:400, success: false, msg:err.msg});
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
            res.send({status:400, success: false, msg:'Something went wrong'});
        }
    },
    uploadSingleProducts:async (req, res) => {
        try{

        }catch{

        }
    },

}

module.exports =productCtrl;