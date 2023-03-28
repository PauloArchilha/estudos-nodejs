import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    console.log("GET /cars");
    res.send("GET /cars");
});

router.get("/precos", (req, res) => {
    console.log("GET /cars/precos");
    res.send("GET /cars/precos");
});

export default router;
