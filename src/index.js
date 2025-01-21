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
.then(async () => {
    
    console.log("Connected DB")

    // Selecciona la base de datos que deseas usar
    const dbName = "sample_mflix"; // Cambia esto por el nombre de tu base de datos
    const db = mongoose.connection.useDb(dbName);

    // Lista las colecciones de la base de datos
    const collections = await db.db.listCollections().toArray();
    console.log("Collections:", collections.map((col) => col.name));

})
.catch((error) => console.error(error))
