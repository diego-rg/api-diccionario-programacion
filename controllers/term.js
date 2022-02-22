import Term from "../models/term.js"

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

async function randomTerm (req, res, next) {
    const term = new Term();
    term.name = req.body.name;
    term.definition = req.body.definition;
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

async function searchTerm (req, res, next) {
    res.status(200).json({ probando: "ruta search term" });
}

async function termCategories (req, res, next) {
    res.status(200).json({ probando: "ruta show categories" });
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

export default { createTerm, randomTerm, searchTerm, termCategories, termCategory, termName, updateTerm, destroyTerm }