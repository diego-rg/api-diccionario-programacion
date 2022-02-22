import express from "express";

import termController from "../controllers/term.js";

const router = express.Router();

router.post("/", (termController.createTerm));

router.get("/random", (termController.randomTerm));

router.post("/search?query={query}", (termController.searchTerm));


router.get("/categories", (termController.termCategories));


router.get("/categories/:category", (termController.termCategory));

router
    .get("/categories/:category/:name", (termController.termName))
    .put("/categories/:category/:name", (termController.updateTerm))
    .delete("/categories/:category/:name", (termController.destroyTerm));


export default router;