import Term from "../models/term.js"

//GET: Búsqueda por palabra. Usamos "q" como término de búsqueda xa que é a que usa google
async function searchWord (req, res, next) {
    try {
        const regExp = new RegExp(`^${req.query.q}`);
        const searchValue = `${regExp}i`;
        const rexgExpInsentive = searchValue.replace('""', "");
        const results = await Term.find({ name: { $regex: regExp } }).collation({ locale: 'es', strength: 1 }).sort({ name: "asc" });
        console.log(req.query.q);
        console.log(regExp)
        console.log(searchValue)
        console.log(rexgExpInsentive)
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

//{ $text: { $search: "\"printer ink\"" }}
//{ definition: { $regex: /^node/i } }