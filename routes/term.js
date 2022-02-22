import express from "express";
import termController from "../controllers/term.js";

const router = express.Router();

router.post("/", (termController.createTerm));

router.get("/random", (termController.randomTerm));

router.get("/all", (termController.allTerms));

router.get("/categories", (termController.termCategories));

router.get("/:category", (termController.termCategory));

router
    .get("/:category/:name", (termController.termName))
    .put("/:category/:name", (termController.updateTerm))
    .delete("/:category/:name", (termController.destroyTerm));


export default router;