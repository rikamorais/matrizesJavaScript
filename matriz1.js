function criarMatrizes () {
    let inputNumeroDeLinhas1 = document.getElementById('inputNumeroDeLinhas1').value;
    let inputNumeroDeColunas1 = document.getElementById('inputNumeroDeColunas1').value;
    let inputNumeroDeLinhas2 = document.getElementById('inputNumeroDeLinhas2').value;
    let inputNumeroDeColunas2 = document.getElementById('inputNumeroDeColunas2').value;
    let saidaDeDados = document.getElementById('saidaDeDados');

    saidaDeDados.innerText = ``;

    /**
     * Alerta para preencimento de número de linhas e colunas das matrizes
     * e criação das matrizes A e B
     */
    if (inputNumeroDeColunas1 == 0 || inputNumeroDeLinhas1 == 0 || inputNumeroDeColunas2 == 0 || inputNumeroDeLinhas2 == 0) {
        alert (`Digite os dados das matrizes.`);
    }
    else {


        /**
         * CRIANDO MATRIZ A
         *  */ 
        let matriz1 = document.getElementById('matriz1');
        matriz1.innerHTML = `<h2>Matriz A</h2>
                        <form name = 'matriz' id='matriz'>`;
        let formulario = document.getElementById('matriz');
        for (j = 0; j <inputNumeroDeLinhas1; j++) {
            for (i = 0; i < inputNumeroDeColunas1; i++) {
                formulario.innerHTML += `<input type='number' class="numeroMatriz" value = '0' onfocus="this.value=''">`;
            }
        formulario.innerHTML += `<br>`;
        }

        /**
         * CRIANDO MATRIZ B
         *  */ 
        let matriz2 = document.getElementById('matriz2');

        matriz2.innerHTML = `<h2>Matriz B</h2>
                        <form name = 'formMatriz2' id='formMatriz2'>`;
        let formulario2 = document.getElementById('formMatriz2');
        for (j = 0; j <inputNumeroDeLinhas2; j++) {
            for (i = 0; i < inputNumeroDeColunas2; i++) {
                formulario2.innerHTML += `<input type='number' class="numeroMatriz2" value = '0' onfocus="this.value=''">`;
            }
        formulario2.innerHTML += `<br>`;
        }
    }    
    return matriz1, matriz2;
}


/**
 * FUNÇÃO PARA PEGAR RESULTADOS CRIAR A MATRIZ A RESULTADO
 */
function matriz1 () {

    /**
     * MATRIZ A
     */
    let inputNumeroDeLinhas = document.getElementById('inputNumeroDeLinhas1').value;
    let inputNumeroDeColunas = document.getElementById('inputNumeroDeColunas1').value;
    let matriz = [];
    let elementosDaMatriz = [];

    /**
     * PEGANDO OS ELEMENTOS DA MATRIZ A
     */
    document.querySelectorAll(".numeroMatriz").forEach (valor => {
        elementosDaMatriz.push(parseInt(valor.value));
    });

    /**
     * CRIANDO E POPULANDO MATRIZ A
     */

    let d = 0;
    for (let i = 0; i < inputNumeroDeLinhas; i++) {
        matriz[i] = [];
        for (let j = 0; j < inputNumeroDeColunas; j++) {
            matriz[i][j] = elementosDaMatriz[d];
            d++;
        }
    }

    return matriz;
}


/**
 * FUNÇÃO PARA CRIAR A MATRIZ B RESULTADO
 */
function matriz2 () {
    /*********************
     * MATRIZ B
     */
         let inputNumeroDeLinhas2 = document.getElementById('inputNumeroDeLinhas2').value;
         let inputNumeroDeColunas2 = document.getElementById('inputNumeroDeColunas2').value;
         let matriz2 = [];
         let elementosDaMatriz2 = [];
     
        document.querySelectorAll(".numeroMatriz2").forEach(valor => {
            elementosDaMatriz2.push(parseInt(valor.value));
        });
     
         /**
          * Criando e populando a MATRIZ B
          */
        let e = 0;
        for (let i = 0; i < inputNumeroDeLinhas2; i++) {
             matriz2[i] = [];
             for (let j = 0; j < inputNumeroDeColunas2; j++) {
                matriz2[i][j] = elementosDaMatriz2[e];
                e++;
             }
         }
         return matriz2;
}

/**
 * *** OPERAÇÕES MATEMÁTICAS
 */

/**
 * ****** ADIÇÃO
 */
function somarMatrizes (matriz1, matriz2) {
    let inputNumeroDeLinhas3 = document.getElementById('inputNumeroDeLinhas1').value;
    let inputNumeroDeColunas3 = document.getElementById('inputNumeroDeColunas1').value;
    let inputNumeroDeLinhas31 = document.getElementById('inputNumeroDeLinhas2').value;
    let inputNumeroDeColunas31 = document.getElementById('inputNumeroDeColunas2').value;
    let saidaDeDados = document.getElementById('saidaDeDados');
    let matrizSoma = [];

/**
 * CONDICIONAL PARA EFETUAR A SOMA DE MATRIZES
 */
    if (inputNumeroDeColunas3 == inputNumeroDeColunas31 && inputNumeroDeLinhas3 == inputNumeroDeLinhas31) {

        /**
         * MONTANDO e POPULANDO A MATRIZ ADIÇÃO
         */
         let saidaDeDados = document.getElementById('saidaDeDados');
         saidaDeDados.innerHTML = ``;
         saidaDeDados.innerHTML += `<h2>Resultado</h2>A + B`;
         saidaDeDados.innerHTML += `<form name="formularioSaida" id = "formularioSaida">`;
         let formularioSaida = document.getElementById("formularioSaida");
         for (i = 0; i <inputNumeroDeLinhas3; i++) {
            matrizSoma[i] = [];
             for (j = 0; j < inputNumeroDeColunas3; j++) {
                matrizSoma[i][j] = matriz1[i][j] + matriz2[i][j];
                formularioSaida.innerHTML += `<input type='text' class = 'inputSaidaDados' value = '${matrizSoma[i][j]}' readonly>`;
             }
             formularioSaida.innerHTML += `<br>`
         }
    }
    else {
        saidaDeDados.innerHTML = `<span style= 'color:red'>Para efetuar a adição entre duas matrizes, ambas precisam ser de mesma ordem (mesmo número de linhas e de colunas)</span>`;
    }
    
    return matrizSoma;
}

/**
 * ****** SUBTRAÇÃO
 */
function subtrairMatrizes (matriz1, matriz2) {
    let inputNumeroDeColunas5 = document.getElementById('inputNumeroDeColunas1').value;
    let inputNumeroDeLinhas51 = document.getElementById('inputNumeroDeLinhas2').value;
    let inputNumeroDeLinhas5 = document.getElementById('inputNumeroDeLinhas1').value;
    let inputNumeroDeColunas51 = document.getElementById('inputNumeroDeColunas2').value;
    
    /**
     * CONDICIONAL PARA REALIZAR A SUBTRAÇÃO DE MATRIZES
     */
    if (inputNumeroDeColunas5 == inputNumeroDeColunas51 && inputNumeroDeLinhas5 == inputNumeroDeLinhas51) {
 

        let matrizSubtracao = [];
        /**
         * MONTANDO E POPULANDO A MATRIZ SUBTRAÇÃO
         */

         let saidaDeDados = document.getElementById('saidaDeDados');
         saidaDeDados.innerHTML = ``;
         saidaDeDados.innerHTML += `<h2>Resultado</h2>A - B`;
         saidaDeDados.innerHTML += `<form name="formularioSaida" id = "formularioSaida">`;
         let formularioSaida = document.getElementById("formularioSaida");
         for (i = 0; i <inputNumeroDeLinhas5; i++) {
            matrizSubtracao[i] = [];
             for (j = 0; j < inputNumeroDeColunas51; j++) {
                matrizSubtracao[i][j] = matriz1[i][j] + (matriz2[i][j])*-1;
                console.log(matrizSubtracao);
                formularioSaida.innerHTML += `<input type='text' class = 'inputSaidaDados' value = '${matrizSubtracao [i][j]}' readonly>`;
             }
             formularioSaida.innerHTML += `<br>`
         }
    }
    else {
        saidaDeDados.innerHTML = `<span style = 'color: red'>Para efetuar a subtração entre duas matrizes, ambas precisam ser de mesma ordem (mesmo número de linhas e de colunas)</span>`;
    }
    return matrizSubtracao;
}


/**
 * ****** MULTIPLICAÇÃO
 */
function multiplicarMatrizes (matriz1, matriz2) {
    let inputNumeroDeLinhas4 = document.getElementById('inputNumeroDeLinhas1').value;
    let inputNumeroDeColunas4 = document.getElementById('inputNumeroDeColunas1').value;
    let inputNumeroDeLinhas41 = document.getElementById('inputNumeroDeLinhas2').value;
    let inputNumeroDeColunas41 = document.getElementById('inputNumeroDeColunas2').value;
    let saidaDeDados = document.getElementById('saidaDeDados');
    let matrizMultiplicacao = [];

    if (inputNumeroDeColunas4 == inputNumeroDeLinhas41) {
 
 /**********************
 * multiplicando os dados
 ******************** */
        let somaMultiplicacao = 0;
        // let matrizMultiplicacao = [];
/**
 * ALGORITMO PARA MULTIPLICAR MATRIZES
 * O k multiplica linhas da matriz A por colunas da matriz B
 * O somaMultiplicacao soma os valores  do for(k) para compor o número da matriz
 */
        for (let i = 0; i < inputNumeroDeLinhas4; i++) {
            matrizMultiplicacao[i] = [];
            for (let j = 0; j < inputNumeroDeColunas41; j++){
                for (let k = 0; k <inputNumeroDeColunas4; k++){
                    somaMultiplicacao += parseInt(matriz1[i][k] * matriz2[k][j]);
                }
                matrizMultiplicacao [i][j] = somaMultiplicacao;
                somaMultiplicacao = 0;
            }
        }

        /**********************
         * preparando a saída de dados
         ******************** */
        saidaDeDados.innerHTML = ``;
        saidaDeDados.innerHTML += `<h2>Resultado</h2>A x B`;
        saidaDeDados.innerHTML += `<form name="formularioSaida" id = "formularioSaida">`;
        let formularioSaida = document.getElementById('formularioSaida');
        for (i = 0; i <inputNumeroDeLinhas4; i++) {
            for (j = 0; j < inputNumeroDeColunas41; j++) {
                formularioSaida.innerHTML += `<input type='text' class = 'inputSaidaDados' value = '${matrizMultiplicacao [i][j]}' readonly>`;
            }
            formularioSaida.innerHTML += `<br>`
        }
    }
    else {
        saidaDeDados.innerHTML = `<span style = 'color: red'>Para multiplicar matrizes, o número de colunas da primeira matriz
        deve ser igual ao número de linhas da segunda matriz.</span>`;
    }
    return matrizMultiplicacao;
}


/******************
 * Função que limpa os campos da página
 *****************************************/
function buttonLimpar () {

    let inputNumeroDeLinhas1 = document.getElementById('inputNumeroDeLinhas1');
    inputNumeroDeLinhas1.value = 0;
    inputNumeroDeLinhas1.style = `color: white`;

    let inputNumeroDeColunas1 = document.getElementById('inputNumeroDeColunas1');
    inputNumeroDeColunas1.value = 0;
    inputNumeroDeColunas1.style = `color: white`;

    let inputNumeroDeLinhas2 = document.getElementById('inputNumeroDeLinhas2');
    inputNumeroDeLinhas2.value = 0;
    inputNumeroDeLinhas2.style = `color: white`;

    let inputNumeroDeColunas2 = document.getElementById('inputNumeroDeColunas2');
    inputNumeroDeColunas2.value = 0;
    inputNumeroDeColunas2.style = `white`;

    let saidaDeDados = document.getElementById('saidaDeDados');
    saidaDeDados.innerHTML = ``;

    let matriz1 = document.getElementById('matriz1');
    matriz1.innerHTML = ``;

    let matriz2 = document.getElementById('matriz2')
    matriz2.innerHTML = ``;
}


/**
 * Função para aceitar somente números nos inputs
 *************************************************/
function somenteNumeros (e) {
    let charCode = e.charCode ? e.charCode : e.keyCode;
    // charCode 8 = backspace
    // charCode 9 = tab

    if (charCode != 8 && charCode) {
        // charCode 48 equivale a 0
        // charCode 57 equivale a 9
        if (charCode < 48 || charCode > 57) {
            return false
        }
    }
}


/**
 * Código para incrementar e decrementar o número de linhas e colunas das MATRIZES
 * Altera o número dos values dos inputs pelos botões + e -
 */

/**
 * Altera font color que está no CSS de white para black no input linha da MATRIZ A
 */
let inputLinha1 = document.getElementById('inputNumeroDeLinhas1');
inputLinha1.addEventListener ('click', () => {
    inputLinha1.style = `color: black`;
});

/**
 * Incrementa o valor do número do campo linha da MATRIZ A
 */
let buttonSomar1 = document.getElementById('buttonSomar1');
let inputLinha11 = 0;
buttonSomar1.addEventListener ('click', () => {
    inputLinha1.style = `color: black`;
    inputLinha1 = document.getElementById('inputNumeroDeLinhas1');
    inputLinha11 = parseInt(inputLinha1.value);
    inputLinha11 += 1;
    inputLinha1.value = `${inputLinha11}`;
});

/**
 * Decrementa o valor do número do campo linha da MATRIZ A
 */
let buttonSubtrair1 = document.getElementById('buttonSubtrair1');
buttonSubtrair1.addEventListener ('click', () => {
    inputLinha1 = document.getElementById('inputNumeroDeLinhas1');
    inputLinha11 = parseInt(inputLinha1.value);
    if (inputLinha11 >= 2) {
        inputLinha1.style = `color: black`;
        inputLinha11 -= 1;
        inputLinha1.value = `${inputLinha11}`;
    }
});

/**
 * Altera font color que está no CSS de white para black no input linha da MATRIZ A
 */
 let inputColuna1 = document.getElementById('inputNumeroDeColunas1');
 inputColuna1.addEventListener ('click', () => {
     inputLColuna1.style = `color: black`;
 });

/**
 * Incrementa o valor do input da coluna da MATRIZ A
 */
 let buttonSomar2 = document.getElementById('buttonSomar2');
 buttonSomar2.addEventListener ('click', () => {
     inputColuna1.style = `color: black`;
     inputColuna1 = document.getElementById('inputNumeroDeColunas1');
     inputColuna11 = parseInt(inputColuna1.value);
     inputColuna11 += 1;
     inputColuna1.value = `${inputColuna11}`;
 });

/**
 * Decrementa o valor do input coluna da MATRIZ A
 */

 let buttonSubtrair2 = document.getElementById('buttonSubtrair2');
 buttonSubtrair2.addEventListener ('click', () => {
     inputColuna1 = document.getElementById('inputNumeroDeColunas1');
     inputColuna11 = parseInt(inputColuna1.value);
     if (inputColuna11 >= 2) {
         inputColuna1.style = `color: black`;
         inputColuna11 -= 1;
         inputColuna1.value = `${inputColuna11}`;
     }
 });

/**
 * Altera font color que está no CSS de white para black no input linha da MATRIZ B
 */
let inputLinha2 = document.getElementById('inputNumeroDeLinhas2');
inputLinha2.addEventListener ('click', () => {
    inputLinha2.style = `color: black`;
});


/**
 * Incrementa o valor do input linha da MATRIZ B
 */
 let buttonSomar3 = document.getElementById('buttonSomar3');
 buttonSomar3.addEventListener ('click', () => {
     let inputLinha2 = document.getElementById('inputNumeroDeLinhas2');
     let inputLinha21 = parseInt(inputLinha2.value);
     inputLinha2.style = `color: black`;
     inputLinha21 += 1;
     inputLinha2.value = `${inputLinha21}`;
 });

 /**
 * Decrementa o valor do input linha da MATRIZ B
 */
 
  let buttonSubtrair3 = document.getElementById('buttonSubtrair3');
  buttonSubtrair3.addEventListener ('click', () => {
      inputLinha2 = document.getElementById('inputNumeroDeLinhas2');
      inputLinha21 = parseInt(inputLinha2.value);
      if (inputLinha21 >= 2) {
          inputLinha2.style = `color: black`;
          inputLinha21 -= 1;
          inputLinha2.value = `${inputLinha21}`;
      }
  });

/**
 * Altera o font color de white para black no input coluna da MATRIZ B
 */
let inputColuna2 = document.getElementById('inputNumeroDeColunas2');
inputColuna2.addEventListener ('click', () => {
    inputColuna2.style = `color: black`;
});


/**
 * Incrementa o valor do input linha da MATRIZ B
 */
 let buttonSomar4 = document.getElementById('buttonSomar4');
 buttonSomar4.addEventListener ('click', () => {
     let inputColuna2 = document.getElementById('inputNumeroDeColunas2');
     inputColuna2.style = `color: black`;
     let inputColuna21 = parseInt(inputColuna2.value);
     inputColuna21 += 1;
     inputColuna2.value = `${inputColuna21}`;
 });

 /**
 * Decrementa o valor do input linha da MATRIZ B
 */
 
  let buttonSubtrair4 = document.getElementById('buttonSubtrair4');
  buttonSubtrair4.addEventListener ('click', () => {
      inputColuna2 = document.getElementById('inputNumeroDeColunas2');
      inputColuna21 = parseInt(inputColuna2.value);
      if (inputColuna21 >= 2) {
          inputColuna2.style = `color: black`;
          inputColuna21 -= 1;
          inputColuna2.value = `${inputColuna21}`;
      }
  });
