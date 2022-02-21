import express from "express";

const router = express.Router();

router.post("/", (req, res, next) => {
    res.status(200).json({ probando: "ruta create/post" });
});

export default router;