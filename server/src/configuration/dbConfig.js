const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/DealsDray", {});

mongoose.connection.on("connected", () => console.log("Connected to mongoDB"));
mongoose.connection.on("error", (err) => console.error(`Error ${err}`));

module.exports = mongoose;
