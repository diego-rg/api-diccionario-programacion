import express from "express";

const router = express.Router();

router.put("/:name", (req, res, next) => {
    res.status(200).json({ probando: "ruta update/put" });
});

export default router;