/****************************************************
* Objetivo: fazer o cálculo do imc de uma pessoa
* Autor: João Pedro
* Data: 04/02/2026
* Versão: 1.0
 **************************************************/

const readline = require('readline')

const entradaDeDados = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

//Entrada dos dados da pessoa
entradaDeDados.question('Digite Seu peso')
    let peso = pesoPessoa

entradaDeDados.addListener.question('Digite sua altura')
    let altura = alturaPessoa