import express from "express";
import carsRouter from "./carsRouter.js";

const app = express();
app.use(express.json());

app.use("/cars", carsRouter);

app.use((req, res, next) => {
    console.log(new Date());
});

app.get("/teste", (req, res) => {
    res.end();
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});
