import Term from "../models/term.js"

//GET: Búsqueda por palabra. Usamos "q" como término de búsqueda xa que é a que usa google
//A búsqueda usa un index creado con mongo atlas. Úsase aggregate + query syntax de atlas
async function searchWord (req, res, next) {
    try {
        const results = await Term.aggregate([
            {
              '$search': {
                'index': 'searchWord',
                'text': {
                  'query': req.query.q,
                  'path': {
                    'wildcard': '*'
                  }
                }
              }
            }
          ]);
        console.log(req.query.q);
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