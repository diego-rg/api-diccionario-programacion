import express from "express";

const router = express.Router();

router.delete("/:name", (req, res, next) => {
    res.status(200).json({ probando: "ruta destroy/delete" });
});

export default router;