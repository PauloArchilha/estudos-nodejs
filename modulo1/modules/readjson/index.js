import { promises as fs } from "fs";

// init();
writeReadJson();

// async function init() {
//     try {
//         await fs.writeFile("teste4.txt", "Hello World! ");
//         await fs.appendFile("teste4.txt", "Testando async/await");
//         const data = await fs.readFile("teste4.txt", "utf-8");
//         console.log(data);
//     } catch (err) {
//         console.log(err);
//     }
// }

async function writeReadJson() {
    try {
        // escrita com valores iniciais
        const arrayCarros = ["Gol", "Palio", "Uno"];
        const obj = { carros: arrayCarros };
        await fs.writeFile("teste.json", JSON.stringify(obj));

        // fez a leitura do conteudo atyal
        const data = JSON.parse(await fs.readFile("teste.json", "utf-8"));

        // modificamos o conteudo
        data.carros.push("Sandero");
        data.carros.push("Golf");

        // sobrescrevemos o arquivo com o conteudo alterado
        await fs.writeFile("teste.json", JSON.stringify(data));
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}

writeReadJson();
