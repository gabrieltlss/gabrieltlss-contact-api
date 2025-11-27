const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const router = require("./routes.js");

const app = express();
app.use(cors({
    origin: "https://gabrieltlss.com.br"
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

console.log("Server iniciado.");
module.exports = app;