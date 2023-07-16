const Products = require('../models/uploadAllProductsModel');
const csv = require('csvtojson');

class APIfeatures{
    constructor(query, queryString){
        this.query = query;
        this.queryString = queryString;
    }
    filtering(){
        const queryObj = {...this.queryString} //queryString = req.query
        // console.log({before: queryObj}) //before delete page

        const excludedFields = ['page', 'sort', 'limit']
        excludedFields.forEach(el => delete(queryObj[el]))

        // console.log({after: queryObj}) //after delete page

        let queryStr = JSON.stringify(queryObj)
        queryStr = queryStr.replace(/\b(gte|gt|lt|lte|regex)\b/g, match=> '$' + match)
        // console.log({ queryStr})

        // gte = greater than or equal
        // lte = lesser than or equal
        // lt = lesser than
        // gt = geater than 
        // regex = for text search
        this.query.find(JSON.parse(queryStr))

        return this;
    }

    sorting(){
        if(this.queryString.sort){
            const sortBy = this.queryString.sort.split(',').join(' ')
            this.query = this.query.sort(sortBy)
        }else{
            this.query = this.query.sort('-createdAt')
        }
        return this;
    }

    paginating(){
        const page = this.queryString.page * 1 || 1
        const limit = this.queryString.limit * 1 || 9
        const skip = (page - 1) * limit;
        this.query = this.query.skip(skip).limit(limit)
        return this;
    }
}

const productCtrl ={

    // This is get as MRP
    getAllProducts:async (req, res) => {
        try{
            const allProducts = await Products.find();
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

            const searchProduct = await Products.find({"product_name":{$regex: ".*"+searchText+".*"}});

            //const searchProduct = await Products.findOne({product_name:searchText});
            if(searchProduct.length > 0){
                return res.json(searchProduct);

            }else{
                const newsearchProduct = await Products.findOne({barcode:searchText});
                if(!newsearchProduct){
                    const finalsearchProduct = await Products.findOne({item_code:searchText});

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