const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express();
const port = process.env.PORT || 9000;

//RUTA
app.get("/", (req,res) =>{
    res.send('Va no me jodas')
})

app.listen(port, () => console.log("Hola", port));

mongoose
.connect(process.env.MONGODB_URI)
.then(() => console.log("Connected DB"))
.catch((error) => console.error(error))