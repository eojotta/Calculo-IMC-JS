const calcularDados = function (peso, altura){
let pesoPessoa = Number(peso)
let alturaPessoa = Number(altura)


    let resultado = (peso / (altura * altura))
    return resultado.toFixed(2)
}

const indentificarStatus = function(imc){
    let imcPessoa = Number(imc)
    let status

    if(imcPessoa < 18.5 ){
        status = "Abaixo do peso"

    }else if( imcPessoa >= 18.5 && imcPessoa <= 24.9){
        status = "Peso normal"
       
    }else if( imcPessoa > 25 && imcPessoa <= 29.9){
        status = "Acima do Peso ( sobrepeso) "
        
    }else if( imcPessoa > 30 && imcPessoa <= 34.9){
        status = "Obesidade I"
   
    }else if( imcPessoa > 35 && imcPessoa <= 39.9){
        status = "Obesidade II"
       
    }else if( imcPessoa > 40){
        status = "Obesidade III"
        
    }

    return status

}

module.exports = {
    calcularDados,
    indentificarStatus
}