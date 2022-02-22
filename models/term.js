import mongoose from "mongoose";

const Schema = mongoose.Schema;

const TermSchema = new Schema({
    name: {
        type: String,
        required
    },
    definition: {
        type: String,
        required
    },
    category: {
        type: [{ type: String, enum: ["lenguaje", "framework", "librería", "metodología", "herramienta", "testing"] }],
        required
    }
});

const Term = mongoose.model("Term", TermSchema);
const categories = Term.schema.path('category').enumValues;

export default { Term, categories }