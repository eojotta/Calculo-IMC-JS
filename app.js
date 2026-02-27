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
entradaDeDados.question('Digite Seu peso: ',function(peso){
    let pesoPessoa = peso

    entradaDeDados.question ('Digite sua altura: ',function(altura){
    let alturaPessoa = altura
    
       let calculos  = require('./calculo.js')

        let imc = calculos.calcularDados(peso, altura)
        let status = calculos.indentificarStatus(imc)

        console.log("Seu imc é : " + imc)
        console.log('classificação : ' + status)

        entradaDeDados.close()

})

})