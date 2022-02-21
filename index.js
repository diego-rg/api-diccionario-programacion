if (process.env.NODE_ENV !== "production") {
    import dotenv from "dotenv";
    dotenv.config();
}
import express from "express";
import config from "./config.js";

const PORT = process.env.PORT || 3000;

//Iniciamos preparando para test
let _server;
const server = {
    start() {
        const app = express()

        config(app);

        _server = app.listen(PORT, () => {
            if (process.env.NODE_ENV !== test) {
                console.log(`Servidor abierto en ${PORT}`);
            }
        });
    },
    close() {
        _server.close();
    }
}

export default server;

//parent deprecated!
if(!module.parent) {
    server.start();
}