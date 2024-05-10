require("dotenv").config();
const express = require("express");
const app = express();
const connection = require("./config/database");

// config req.body
app.use(express.json()); // for json
app.use(express.urlencoded({ extended: true })); // for form data

// Routers
app.use("/", webRouter);

// test connection
connection.query("SELECT * FROM Users u", function (err, results, fields) {
    // console.log(results);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
