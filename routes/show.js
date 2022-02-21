import express from "express";

const router = express.Router();

router.get("/:name", (req, res, next) => {
    res.status(200).json({ probando: "ruta show/get" });
});

export default router;