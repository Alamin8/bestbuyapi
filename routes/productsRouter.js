const productCtrl = require('../controllers/productsCtrl');


const router = require('express').Router()

router.get('/products', productCtrl.getAllProducts);
router.get('/scanProducts', productCtrl.getScanQueryProducts);
router.get('/searchProducts', productCtrl.getSearchQueryProducts);



module.exports = router;




