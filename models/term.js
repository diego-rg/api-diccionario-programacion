import mongoose from "mongoose";

const Schema = mongoose.Schema;

const TermSchema = new Schema({
    name: {
        type: String,
        required: [true, "El término debe tener un nombre."],
        unique: true
    },
    definition: {
        type: String,
        required: [true, "El término debe tener una definición."],
    },
    category: {
        type: String,
        enum: {
            values: ["lenguaje", "framework", "librería", "metodología", "herramienta", "testing", "entorno"],
            message: "{VALUE} no es existe como categoría actualmente. Consulte las categorías existentes."
        },
        required: [true, "El término debe pertenecer alguna de las categorías existentes."]
    }
});

//Definimos un index onde poñemos todos as key nas uqe uqeremos que busque logo o noso endpoint de search
TermSchema.index({ name: "text", definition: "text", category: "text" });

export default mongoose.model("Term", TermSchema);