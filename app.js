const readline = require('readline-sync');

function boasVindas() {
    console.log("\n========================");
    console.log("SEJA BEM VINDO AO CINEMA");
    console.log("========================");
    console.log("\nVamos criar seu cadastro.");
    console.log("Para continuar precisamos de alguns dados.");
}

function questions() {
    let nome = "";
    let idade = "";
    let cpf = "";
    let email = "";

    while (nome === "" || /\d/.test(nome)) {
        nome = readline.question("\nInforme seu nome:");
        if (nome === "") {
            console.log("ERRO! NOME NÃO FOI INFORMADO.");
            console.log("TENTE NOVAMENTE!");
        } else if (/\d/.test(nome)) {
            console.log("ERRO! FOI DETECTADO NÚMEROS.");
            console.log("TENTE NOVAMENTE!");
        }
    }

    while (idade === "" || /[a-zA-Z]/.test(idade)) {
        idade = readline.question("\nola " + nome + ", qual a sua idade:");
        if (idade === "") {
            console.log("ERRO! IDADE NÃO FOI INFORMADA.");
            console.log("TENTE NOVAMENTE!");
        } else if (/[a-zA-Z]/.test(idade)) {
            console.log("ERRO! LETRAS FORAM DETECTADAS.");
            console.log("TENTE NOVAMENTE!");
        } else if (idade < 18) {
            console.log("Lamentamos, somente maiores de 18 anos podem ter conta!");
            return;
        }
    }

    while (cpf === "" || /[a-zA-Z]/.test(cpf) || cpf.length < 11) {
        cpf = readline.question("Informe seu Cpf:");
        if (cpf === "") {
            console.log("ERRO! CPF NÃO FOI INFORMADO.");
            console.log("TENTE NOVAMENTE!");
        } else if (/[a-zA-Z]/.test(cpf)) {
            console.log("ERRO! LETRAS FORAM DETECTADAS.");
            console.log("TENTE NOVAMENTE!");
        } else if (cpf.length != 11) {
            console.log("ERRO! CONFIRA O SEU CPF E TENTE NOVAMENTE.");
        }
    }

    while (email === "" || !email.includes("@") || !email.includes(".com")) {
        email = readline.question("informe seu melhor email:");
        if (email === "") {
            console.log("ERRO! EMAIL NÃO FOI INFORMADO.");
            console.log("TENTE NOVAMENTE!");
        } else if (!email.includes("@") || !email.includes(".com")) {
            console.log("ERRO! CONFIRA SEU EMAIL E TENTE NOVAMENTE");
        }
    }


}

boasVindas();
questions();