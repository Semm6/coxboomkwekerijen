// server/index.js
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3001;

const whitelist = ["http://localhost:3000"];
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};
app.use(cors(corsOptions));

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
2;
