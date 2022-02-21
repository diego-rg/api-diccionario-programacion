import bodyParser from "body-parser"; //Extrae o body da request e déixaa en req.body para traballar con ela
import logger from "morgan"; //Middleware logger que nos da información sobre as requests
import cors from "cors";

export default app => {
    app.disable("x-powered-by"); //Para que non saia no navegador que estamos usando express, por seguridade

    app.set("env", process.env.NODE_ENV);

    if (process.env.NODE_ENV !== "test") { //Se non estamos testeando, que use morgan co modo completo
        app.use(logger("combined"));
    }

    app.use(bodyParser.json());

    app.use(bodyParser.urlencoded({ extended: false })); //Para non poder usar nested objects

    app.use(cors()); //Xestiona de maneira automática os headers cando recibimos peticións de outro orixe que non é o da nosa API
}