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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server initialized.`));
console.log("Server iniciado");
