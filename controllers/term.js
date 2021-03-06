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
        //Selecciona unha mostra aleatoria
        Term.aggregate([{ $sample: { size: 1 } }], function(err, result) {
            if(!result) {
                res.status(400).send({ msg: "No se han podido devolver un término aleatorio." });
            } else {
                const random = result[0];//sacalo do array
                res.status(200).send({ random });
            }
        });
    } catch (error) {
        res.status(500).send(error);
    }
}

//SHOW: todos
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

//SHOW: categorías
async function termCategories (req, res, next) {
    const categories = (Term.schema.path('category').enumValues).sort();
    res.status(200).send({ categories });
}

//SHOW: terms da categoría indicada
async function termCategory (req, res, next) {
    try {
        const terms = await Term.find({ category: req.params.category }).collation({ locale: 'es', strength: 1 }).sort({ name: "asc" });
        if(!terms) {
            res.status(400).send({ msg: "No se han podido cargar los términos de la categoría indicada." });
        } else if(terms.length === 0) {
            res.status(400).send({ msg: "La categoría indicada no existe o no tiene términos actualmente." });
        }else {
            res.status(200).send({ terms });
        }
    } catch (error) {
        res.status(500).send(error);
    }
}

//SHOW: term por nome
async function termName (req, res, next) {
    try {
        const term = await Term.find({ name: req.params.name }).collation({ locale: 'es', strength: 1 }).sort({ name: "asc" });
        if(!term) {
            res.status(400).send({ msg: "No se ha podido cargar el término especificado." });
        } else if(term.length === 0) {
            res.status(400).send({ msg: "El término no existe." });
        }else {
            res.status(200).send({ term });
        }
    } catch (error) {
        res.status(500).send(error);
    }
}

//UPDATE: modificar term con put
//Ao querer facer a búsqueda por nome, primero hay que buscar o term e logo pasalo como condición. Usamos runValidators para que valide nome e category ao modificar
async function updateTerm (req, res, next) {
    const findName = await Term.find({ name: req.params.name }).collation({ locale: 'es', strength: 1 });
    const newData = req.body;
    try {
        const term = await Term.findByIdAndUpdate(findName, newData, { runValidators: true });
        if(!term) {
            res.status(400).send({ msg: "No se ha podido modificar el término" });
        } else {
            res.status(200).send({ msg: "Término modificado correctamente" });
        }
    } catch (error) {
        res.status(500).send(error);
    }
}

//DESTRY: delete term
async function destroyTerm (req, res, next) {
    try {
        const term = await Term.findOneAndDelete({ name: req.params.name });
        if(!term) {
            res.status(400).send({ msg: "No se ha podido eliminar la tarea" });
        } else {
            res.status(200).send({ msg: "Tarea eliminada correctamente" });
        }
    } catch (error) {
        res.status(500).send(error);
    }
}

export default { createTerm, randomTerm, allTerms, termCategories, termCategory, termName, updateTerm, destroyTerm }