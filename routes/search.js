import express from "express";
import searchController from "../controllers/search.js";

const router = express.Router();

router.get("/search?query={query}", (searchController.searchWord));

export default router;