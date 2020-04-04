const express = require("express");
const cors = require("cors");
const app = express();
const pool = require("./db");

//Middleware
app.use(cors());
app.use(express.json());

//Routes//

app.listen(5000, () => {
  console.log("Server has started on port 5000");
});
