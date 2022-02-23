import Term from "../models/term.js"

//GET: Búsqueda por palabra
async function searchWord (req, res, next) {
    try {
        const results = await Term.find({$text: {$search: search}}).collation({ locale: 'es', strength: 1 }).sort({ name: "asc" });
        if(!results) {
            res.status(400).send({ msg: "No se ha podido cargar el resultado de la búsqueda." });
        } else if(results.length === 0) {
            res.status(400).send({ msg: "La búsqueda realizada no ha encontrado nada." });
        }else {
            res.status(200).send({ results });
        }
    } catch (error) {
        res.status(500).send(error);
    }
}

export default { searchWord }