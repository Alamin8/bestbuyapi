const productCtrl = require('../controllers/productsCtrl');


const router = require('express').Router()

router.get('/products', productCtrl.getAllProducts)



module.exports = router;
