const express = require("express");
const bodyParser = require("body-parser");
const empRoutes = require("./routes/empRoutes");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

app.listen(PORT, () =>
  console.log(`Server connected at http://127.0.0.1:${PORT}`)
);

app.use("/api/emp", empRoutes);
