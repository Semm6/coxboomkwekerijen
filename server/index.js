// server/index.js
const express = require("express");
const mysql = require("mysql");

const PORT = process.env.PORT || 3001;

const app = express();

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "CoxBoomkwekerijen",
});

// HTTP GET
app.get("/api/get", (req, res) => {
  const sqlSelect = "SELECT * FROM product";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
