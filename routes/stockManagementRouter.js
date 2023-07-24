const express = require("express");
const multer = require("multer");
const path = require("path");
const bodyParser = require("body-parser");
const router = express.Router()


router.use(bodyParser.urlencoded({ extended: true }));
router.use(express.static(path.resolve(__dirname, "public")));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({storage:storage});


const stockManagementCTRL = require('../controllers/stockManagementCTRL');



router.post('/create-stock-title', stockManagementCTRL.createStockTitle);
router.get('/all-stock-title', stockManagementCTRL.getAllStockTitle);
router.post('/update-stock-title', stockManagementCTRL.updateStockTitle);
router.post('/delete-stock-title', stockManagementCTRL.deleteStockTitle);
router.post('/stock-upload', upload.single('file'), stockManagementCTRL.stockUpload);
router.post('/inventory-posting', stockManagementCTRL.inventory_posting);

module.exports = router;