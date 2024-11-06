const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/DealsDray");
    console.log("Connected to mongoDB");
  } catch (err) {
    console.log(`MongoDB connection error. ${err}`);
  }
};

module.exports = { mongoose, dbConnect };
