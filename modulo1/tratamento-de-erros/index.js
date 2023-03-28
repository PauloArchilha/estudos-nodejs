import express from "express";

const app = express();
app.use(express.json());

app.get("/api", (req, res) => {
    throw new Error("Error message test");
});

app.post("/api/", async (req, res, next) => {
    try {
        throw new Error("Error message async test");
    } catch (err) {
        // next(err);
        res.status(500).send(err.message);
    }
});

app.use((err, req, res, next) => {
    console.log("Erro 1");
    next(err);
    //res.status(500).send("Ocorreu um erro, tente novamente mais tarde");
});

app.use((err, req, res, next) => {
    console.log("Erro 2");
    res.status(500).send("Ocorreu um erro, tente novamente mais tarde");
});

app.listen(3000, () => {
    console.log("Server is running");
});
