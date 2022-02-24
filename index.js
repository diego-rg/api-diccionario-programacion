import express from "express";
import config from "./config.js";
import router from "./router.js";
import mongoose from "mongoose";

const PORT = process.env.PORT;
const urlDB = process.env.URL_DB;

mongoose.connect(urlDB, { useNewUrlParser: true, useUnifiedTopology: true }, (err, res) => {
     try {
         if(err) {
             throw err;
         } else {
             console.log("Conexión exitosa a la base de datos.");
             app.listen(PORT, () => {
                 console.log("Servidor de la API Rest funcionando");
             });
         }
     } catch (error) {
         console.log(error);
     }
 });

const app = express()
config(app);
router(app);

//Error 404 para TODOS os path que non existen (NON conta as ids, solo path base). Debe ir ao final. COn next pasa ao siguiente
app.all("*", (req, res, next) => {
    res.status(404).send({ msg: "La página indicada no existe." });
});