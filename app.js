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
    let senha = "";
    let newSenha = "";
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
        idade = readline.question("\nOla " + nome + ", qual a sua idade:");
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
        cpf = readline.question("\nInforme seu Cpf:");
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
        email = readline.question("\ninforme seu melhor email:");
        if (email === "") {
            console.log("ERRO! EMAIL NÃO FOI INFORMADO.");
            console.log("TENTE NOVAMENTE!");
        } else if (!email.includes("@") || !email.includes(".com")) {
            console.log("ERRO! CONFIRA SEU EMAIL E TENTE NOVAMENTE");
        }
    }
    console.clear();
    console.log("\n" + nome + ", estamos na última etapa para finalizar seu cadastro!");
    console.log("Crie uma senha com os requisitos:");
    console.log("\nMinimo 8 caracteres");
    console.log("Incluir letras maiusculas e minusculas");
    console.log("Incluir números");

    function CriarSenha() {
        while (senha === "" || !/[a - z]/.test(senha) || !/[A-Z]/.test(senha) || !/\d/.test(senha) || senha.length < 8) {
            senha = readline.question("\nCrie sua senha:");
            if (senha === "") {
                console.log("ERRO! SENHA NÃO FOI INFORMADA.");
                console.log("TENTE NOVAMENTE!");
            } else if (!/[a - z]/.test(senha) || !/[A-Z]/.test(senha) || !/\d/.test(senha) || senha.length < 8) {
                console.log("ERRO! A SENHA DEVE SEGUIR COM OS REQUISITOS INFORMADOS!");
                console.log("TENTE NOVAMENTE!")
            }
        }

        while (newSenha === "" || newSenha != senha) {
            newSenha = readline.question("Confirme sua senha:")
            if (newSenha === "") {
                console.log("ERRO! SENHA NÃO FOI INFORMADA.");
                console.log("TENTE NOVAMENTE!");
            } else if (newSenha != senha) {
                console.log("ERRO! AS SENHAS NÃO CONDIZEM");
                console.log("TENTE NOVAMENTE!\n");
            }
        }
    }
    CriarSenha();
    console.log("\nSEU CADASTRO FOI CONCLUIDO COM SUCESSO!");
}

boasVindas();
questions();