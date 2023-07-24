require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const productUploadRoute = require('./routes/excelUploadRouter')


const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());





app.use('/', productUploadRoute)



// Cross Platform Route
app.use('/user', require('./routes/userRouter' ));







//Routes for mobile apk api
app.use('/api-apk', require('./routes/productsRouter'));








//connect to mongodb
const URI = process.env.MONGO_URL;
const connectDB = async () => {
  try {
    await mongoose.connect(`${URI}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};


connectDB();







const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});

//https://bestbuyapi.onrender.com want to change
