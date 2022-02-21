import express from "express";
import config from "./config.js";

const PORT = process.env.PORT;

const app = express()
config(app);

//temporal: rutas
app.get("/", (req, res, next) => {
    res.status(200).json({ probando: "ruta show/get" });
});

app.post("/", (req, res, next) => {
    res.status(200).json({ probando: "ruta create/post" });
});

app.put("/", (req, res, next) => {
    res.status(200).json({ probando: "ruta update/put" });
});

app.delete("/", (req, res, next) => {
    res.status(200).json({ probando: "ruta destroy/delete" });
});

app.listen(PORT, () => {
     console.log(`Servidor abierto en ${PORT}`);
});