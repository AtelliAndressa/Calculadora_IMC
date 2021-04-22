const form = document.querySelector('#formulario');

//função para parar o formulario e poder capturar os valores
form.addEventListener('submit', function (e){
    e.preventDefault();

    const inputpeso = e.target.querySelector('#peso');
    const inputaltura = e.target.querySelector('#altura');
    const peso = Number(inputpeso.value);
    const altura = Number(inputaltura.value);

    //se o elemento inserido não for numero:
    if(!peso){
        setResultado("Peso Inválido", false);
        return; //a função não prossegue com o return
    }
    if(!altura){
        setResultado("Altura Inválido", false);
        return; //a função não prossegue com o return
    }

    const imc = getImc (peso, altura);
    const nivelImc = getNivelImc(imc);
     
    const msg = `Seu IMC é ${imc} (${nivelImc})`;
    setResultado(msg, true);
});

function getNivelImc (imc){
    const nivel = ['Abaixo do peso','Peso normal','Sobrepeso','Obesidade grau I','Obesidade grau II', 'Obesidade grau III']

    if (imc >= 39.9){
        return nivel[5];
    }
    if(imc >= 34.9){
        return nivel[4];
    }
    if(imc >= 29.9){
        return nivel[3];
    }
    if(imc >= 24.9){
        return nivel[2];
    }
    if(imc >= 18.5){
        return nivel[1];
    }
    if(imc < 18.5){
        return nivel[0];
    }
}

//função para calculo do IMC
function getImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

//função para criar paragrafo no html
    function criaP() {
    const p = document.createElement('p');
    return p;
}

//função para enviar o resultado ao html paragrafo
function setResultado (msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = ''; //limpando o formulario

    const p = criaP();

    if (isValid) {
         p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad');
    }
    p.innerHTML = msg;
    resultado.appendChild(p);
}


