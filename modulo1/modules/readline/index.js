import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let numero = 1;

function askNumber() {
    rl.question("Please enter a number: ", (num) => {
        numero = parseInt(num);
        console.log(numero);
        if (numero !== 0) {
            askNumber();
        } else {
            rl.close();
        }
    });
}

askNumber();
