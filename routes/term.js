import express from "express";

const router = express.Router();

router.post("/", (req, res, next) => {
    res.status(200).json({ probando: "ruta create term" });
});

router.get("/random", (req, res, next) => {
    res.status(200).json({ probando: "ruta show random term" });
});

router.post("/search?query={query}", (req, res, next) => {
    res.status(200).json({ probando: "ruta search term" });
});

router.get("/categories", (req, res, next) => {
    res.status(200).json({ probando: "ruta show categories" });
});

router.get("/categories/:category", (req, res, next) => {
    res.status(200).json({ probando: "ruta show all terms in a category" });
});

router.get("/categories/:category/:name", (req, res, next) => {
    res.status(200).json({ probando: "ruta show term by name" });
});

export default router;