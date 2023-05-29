const productCtrl = require('../controllers/productsCTRL');


const router = require('express').Router()

router.get('/products', productCtrl.getAllProducts)



module.exports = router
