const calcular = document.getElementById('calcular');

function imc () {
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (altura !== '' && peso !== '') {

        const valorIMC = (peso / (altura * altura)).toFixed(2);

        let classificacao = '';

        if (valorIMC < 18.5){
            classificacao = 'você está abaixo do peso';
        }else if (valorIMC < 25) {
            classificacao = 'você está com peso ideal';
        }else if (valorIMC < 30){
            classificacao = 'você está com sobrepeso';
        }else if (valorIMC < 35){
            classificacao = 'você está com obesidade grau 1';
        }else if (valorIMC < 40){
            classificacao = 'você está com obesidade grau 2';
        }else {
            classificacao = 'você está com obesidade mórbida';
        }

        resultado.textContent = `Seu IMC é ${valorIMC} e ${classificacao}`;
        
    }else {
        resultado.textContent = 'É necessário preencher todos os campos';
    }

}

calcular.addEventListener('click', imc);