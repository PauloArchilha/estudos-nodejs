// import op from "./operacoes.js";
// import mult from "./operacoes2.js";
// import { divisao, resto } from "./operacoesNomeadas.js";

// console.log(op.soma(3, 4));
// console.log(op.subtract(3, 4));
// console.log(mult(3, 4));
// console.log(divisao(10, 2));
// console.log(resto(7, 2));

// Utilizando async/await
import { promises as fs } from "fs";
init();
async function init() {
    try {
        await fs.writeFile("teste4.txt", "Hello World! ");
        await fs.appendFile("teste4.txt", "Testando async/await");
        const data = await fs.readFile("teste4.txt", "utf-8");
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}

// Utilizando Promises

// import { promises as fs } from "fs";
// fs.writeFile("teste3.txt", "Hello world! ")
//     .then(() => {
//         fs.appendFile("teste3.txt", "Teste appendFile!")
//             .then(() => {
//                 fs.readFile("teste3.txt", "utf-8")
//                     .then((resp) => {
//                         console.log(resp);
//                     })
//                     .catch((err) => {
//                         console.log(err);
//                     });
//             })
//             .catch((err) => {
//                 console.log(err);
//             });
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// import fs from "fs";

// Utilizando com callbacks!
// fs.writeFile("teste.txt", "Hello World! ", function (err) {
//     if (err) {
//         return console.log(err);
//     } else {
//         fs.appendFile("teste.txt", "Teste appendFile", (err, data) => {
//             if (err) {
//                 return console.log(err);
//             } else {
//                 fs.readFile("./teste.txt", (err, data) => {
//                     if (err) {
//                         return console.log(err);
//                     } else {
//                         console.log(data.toString());
//                     }
//                 });
//                 console.log("Arquivo salvo com sucesso!");
//             }
//         });
//     }
// });

// Não recomendado! Utilizando de forma sincrona
// try {
//     console.log("1");
//     fs.writeFileSync("teste2.txt", "Hello world");
//     console.log("2");
//     console.log(fs.readFileSync("teste2.txt", "utf-8"));
//     console.log("3");
// } catch (err) {
//     console.log(err);
// }
