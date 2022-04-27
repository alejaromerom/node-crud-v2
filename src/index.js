const express = require('express');
const mysql = require('mysql2');
const conn = require('express-myconnection');
const cors = require('cors');
const routes = require('./routes/default.routes');

const app = express();
app.set('port', process.env.PORT || 5000);
const dbConfig = {
    host: "localhost",
    port: "3306",
    user: "baq",
    password: "123456",
    database: "prueba",
}

// middleware
app.use(conn(mysql, dbConfig, "single"));
app.use(express.json());
app.use(cors());

app.use("/", routes);

// server running
app.listen(app.get("port"), () => {
    console.log("server running on port", app.get("port"));
})