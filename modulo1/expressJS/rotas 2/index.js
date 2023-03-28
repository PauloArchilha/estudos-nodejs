import express from "express";

const app = express();
app.use(express.json());

app.listen(3000, (req, res) => {
    console.log("API listening on port 3000");
});

// all
app.all("/testeAll", (req, res) => {
    res.send(req.method);
});

// caracteres especiais
app.get("/teste?", (_req, res) => {
    res.send("/teste?");
});

app.get("/buzz+", (_req, res) => {
    res.send("/buzz+");
});

app.get("/one*blue", (req, res) => {
    res.send("/one*blue");
});

app.post("/test(ing)?", (req, res) => {
    console.log(req.body);
    res.send("/test(ing)?");
});

app.get(/.*Red$/, (req, res) => {
    res.send("/.*Red$/");
});

// parametros na rota
app.get("/testeParametro/:id/:a?", (req, res) => {
    res.send(req.params.id + " " + req.params.a);
});

// parametros via query
app.get("/testeQuery", (req, res) => {
    res.send(req.query);
});

// next
app.get(
    "/testeMultipleHandlers",
    (req, res, next) => {
        console.log("Callback 1");
        next();
    },
    (req, res) => {
        console.log("Callback 2");
        res.send("API Finish");
        //res.end();
    }
);

// next com array

const callback1 = (req, res, next) => {
    console.log("Callback1");
    next();
};

const callback2 = function (req, res, next) {
    console.log("Callback2");
    next();
};

const callback3 = function (req, res) {
    console.log("Callback3");
    res.end();
};

app.get("/testMultipleHandlersArray", [callback1, callback2, callback3]);

// route

app.route("/testRoute")
    .get((req, res) => {
        res.send("/testRoute GET");
    })
    .post((req, res) => {
        res.send("/testRoute POST");
    })
    .delete((req, res) => {
        res.send("/testRoute DELETE");
    });
