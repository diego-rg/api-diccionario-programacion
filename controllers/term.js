import Term from "../models/term.js"

//CREATE: Crear un nuevo término
async function createTerm (req, res, next) {
    const term = new Term();
    term.name = req.body.name;
    term.definition = req.body.definition;
    term.category = req.body.category;
    try {
        const termStore = await term.save();
        if(!termStore) {
            res.status(400).send({ msg: "No se ha podido guardar el término." });
        } else {
            res.status(200).send({ term: termStore });
        }
    } catch (error) {
        res.status(500).send(error);
    }
}

//SHOW: Get un término aleatorio
async function randomTerm (req, res, next) {
    try {
        //Conta todos os term da db, selecciona un mediante un número aleatorio e devólveo se o econtra, senón devolve error
        Term.count().exec(function (err, count) {
            const randomTerm = Math.floor(Math.random() * count);
            console.log(randomTerm)
            Term.findOne().skip(randomTerm).exec(
                function (err, random) {
                    if(!randomTerm) {
                        res.status(400).send({ msg: "No se han podido devolver un término aleatorio." });
                    } else {
                        res.status(200).send({ random });
                    }
                })
        })
    } catch (error) {
        res.status(500).send(error);
    }
}

async function allTerms (req, res, next) {
    try {
        //Buscámolos todos, usamos collation para ignorar mayus/minus e sort para alfabético
        const terms = await Term.find({}).collation({ locale: 'es', strength: 1 }).sort({ name: "asc" });
        if(!terms) {
            res.status(400).send({ msg: "No se han podido cargar los términos." });
        } else {
            res.status(200).send({ terms });
        }
    } catch (error) {
        res.status(500).send(error);
    }
}

async function termCategories (req, res, next) {
    const categories = (Term.schema.path('category').enumValues).sort();
    res.status(200).send({ categories });
}

async function termCategory (req, res, next) {
    res.status(200).json({ probando: "ruta show all terms in a category" });
}

async function termName (req, res, next) {
    res.status(200).json({ probando: "ruta show term by name" });
}

async function updateTerm (req, res, next) {
    res.status(200).json({ probando: "ruta update term" });
}

async function destroyTerm (req, res, next) {
    res.status(200).json({ probando: "ruta destroy term" });
}

export default { createTerm, randomTerm, allTerms, termCategories, termCategory, termName, updateTerm, destroyTerm }