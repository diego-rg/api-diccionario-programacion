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