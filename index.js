import express from "express";
import config from "./config.js";
import router from "./router.js";

const PORT = process.env.PORT;

const app = express()
config(app);
router(app);

app.listen(PORT, () => {
     console.log(`Servidor abierto en ${PORT}`);
});