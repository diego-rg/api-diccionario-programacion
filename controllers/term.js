async function createTerm (req, res, next) {
    res.status(200).json({ probando: "ruta create term" });
}

async function randomTerm (req, res, next) {
    res.status(200).json({ probando: "ruta show random term" });
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