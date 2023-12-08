const mongoose = require("mongoose");
require("dotenv").config();

const connection = async () => {
  try {
    const connect = await mongoose.connect(
      `mongodb+srv://ajayharigovindam:${process.env.mongo_db}@cluster0.vteazdx.mongodb.net/?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("DataBase is connected");
  } catch (err) {
    console.log(`error :${err}`);
    process.exit();
  }
};

module.exports = connection;
