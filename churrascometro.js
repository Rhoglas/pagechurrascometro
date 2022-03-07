//Carne - 400g por pessoa + de 6h - 650g
//Cerveja - 1200ml por pessoa +6h - 2000ml
//Refrigerante - 1000ml por pessoa + 1500ml 

//Crianças valem metade



function calcular() {

    let inputAdultos = document.getElementById('adultos').value;
    let inputCriancas = document.getElementById('criancas').value;
    let inputDuracao = document.getElementById('duracao').value;
    let resultado = document.getElementById('resultado')


    let qtdTotalCarne = Math.ceil(carnePP(inputDuracao) / 1000) *
        inputAdultos + Math.ceil((carnePP(inputDuracao) / 1000) * inputCriancas / 2);

    let qtdTotalCerveja = Math.ceil(cervejaPP(inputDuracao) / 355) * inputAdultos;

    let qtdTotalRefrigerante = Math.ceil(refrigerantePP(inputDuracao) / 1000) *
        inputAdultos + Math.ceil((refrigerantePP(inputDuracao) / 1000) * inputCriancas / 2);


    resultado.innerHTML = `<P> ${qtdTotalCarne}Kg de Carne</p>`
    resultado.innerHTML += `<p>${qtdTotalCerveja} Latas de Cerveja</p>`
    resultado.innerHTML += `<p>${qtdTotalRefrigerante}L de Refrigerante</p>`

}

function carnePP(inputDuracao) {
    if (inputDuracao >= 6) {
        alert('Mas vocês gostam de farra né ;)')
        return 650
    } else {
        return 400
    }
}

function cervejaPP(inputDuracao) {
    if (inputDuracao >= 6) {
        return 2000
    } else {
        return 1200
    }
}

function refrigerantePP(inputDuracao) {
    if (inputDuracao >= 6) {
        return 1500
    } else {
        return 1000
    }
}