import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(3000, () => {
    console.log("API Started!");
});

app.post("/", (req, res) => {
    const a = 3;
    const b = 4;
    const resultado = soma(a, b);
    res.send(`Resultado: ${a} + ${b} = ${resultado}`);
});

function soma(a, b) {
    const resultado = a + b;
    return resultado;
}
