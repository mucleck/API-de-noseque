const express = require('express')
const mongoose = require('mongoose')

const app = express();
const port = process.env.PORT || 9000;

//RUTA
app.get("/", (req,res) =>{
    res.send('Va no me jodas')
})

app.listen(port, () => console.log("Hola", port));

