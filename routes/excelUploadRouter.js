const express = require("express");
const multer = require("multer");
const path = require("path");
const bodyParser = require("body-parser");


const excelUpload = express();

excelUpload.use(bodyParser.urlencoded({ extended: true }));
excelUpload.use(express.static(path.resolve(__dirname, "public")));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({storage:storage});


const productsCtrls = require('../controllers/productsCtrl');

excelUpload.post('/upload-products', upload.single('file'), productsCtrls.uploadAllProducts);



module.exports = excelUpload;