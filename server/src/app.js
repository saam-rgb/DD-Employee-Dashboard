const express = require("express");
const { dbConnect } = require("./configuration/dbConfig");
const app = express();
const PORT = process.env.PORT || 5000;

dbConnect().then(() => {
  app.listen(PORT, () =>
    console.log(`Server connected at http://127.0.0.1:${PORT}`)
  );
});
