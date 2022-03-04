function criarMatrizes () {
    let inputNumeroDeLinhas1 = document.getElementById('inputNumeroDeLinhas1').value;
    let inputNumeroDeColunas1 = document.getElementById('inputNumeroDeColunas1').value;
    let inputNumeroDeLinhas2 = document.getElementById('inputNumeroDeLinhas2').value;
    let inputNumeroDeColunas2 = document.getElementById('inputNumeroDeColunas2').value;
    let saidaDeDados = document.getElementById('saidaDeDados');

    saidaDeDados.innerText = ``;

    if (inputNumeroDeColunas1 == 0 || inputNumeroDeLinhas1 == 0 || inputNumeroDeColunas2 == 0 || inputNumeroDeLinhas2 == 0) {
        alert (`Digite os dados das matrizes.`);
    }
    else {

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

function matriz1 () {

    /**
     * MATRIZ A
     */
    let inputNumeroDeLinhas = document.getElementById('inputNumeroDeLinhas1').value;
    let inputNumeroDeColunas = document.getElementById('inputNumeroDeColunas1').value;
    let inputsDaMatriz = document.querySelectorAll(".numeroMatriz");
    let matriz = [];
    let elementosDaMatriz = [];

    for (i = 0; i < inputsDaMatriz.length; i++) {
         elementosDaMatriz.push(parseInt(document.forms['matriz'].elements[i].value));
    }

    let numerosDaMatriz = [...elementosDaMatriz];

    /**
     * Criando a MATRIZ A
     */
    for (let i = 0; i < inputNumeroDeLinhas; i++) {
        matriz[i] = [];
        for (let j = 0; j < inputNumeroDeColunas; j++) {
            matriz[i][j] = '';
        }
    }

    /**
     * Populando a MATRIZ A
     */
    let d = 0;
    for (let l = 0; l < inputNumeroDeLinhas; l++) {
        for (c = 0; c < inputNumeroDeColunas; c++) {
            matriz[l][c] = numerosDaMatriz[d];
            d++;
        }
    }
    return matriz;
}

function matriz2 () {
    /*********************
     * MATRIZ B
     */
         let saidaDeDados = document.getElementById('saidaDeDados');
         let inputNumeroDeLinhas2 = document.getElementById('inputNumeroDeLinhas2').value;
         let inputNumeroDeColunas2 = document.getElementById('inputNumeroDeColunas2').value;
         let inputsDaMatriz2 = document.querySelectorAll(".numeroMatriz2");
         let matriz2 = [];
         let elementosDaMatriz2 = [];
     
     
         for (i = 0; i < inputsDaMatriz2.length; i++) {
              elementosDaMatriz2.push(parseInt(document.forms['formMatriz2'].elements[i].value));
         }
     
         let numerosDaMatriz2 = [...elementosDaMatriz2];
     
         /**
          * Criando a MATRIZ B
          */
         for (let i = 0; i < inputNumeroDeLinhas2; i++) {
             matriz2[i] = [];
             for (let j = 0; j < inputNumeroDeColunas2; j++) {
                 matriz2[i][j] = '';
             }
         }
     
         /**
          * Populando a MATRIZ B
          */
         let e = 0;
         let resultado2 = '';
         for (let l = 0; l < inputNumeroDeLinhas2; l++) {
             resultado2 += "[ ";
             for (c = 0; c < inputNumeroDeColunas2; c++) {
                 matriz2[l][c] = numerosDaMatriz2[e];
                 resultado2 += matriz2[l][c] + "\t";
                 e++;
             }
             resultado2 += " ] <br>"
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
     * MONTANDO A MATRIZ ADIÇÃO
     */

    if (inputNumeroDeColunas3 == inputNumeroDeColunas31 && inputNumeroDeLinhas3 == inputNumeroDeLinhas31) {
        for (let i = 0; i < inputNumeroDeLinhas3; i++) {
            matrizSoma[i] = [];
            for  (let j = 0; j < inputNumeroDeColunas3; j++) {
                matrizSoma [i][j] = "";
            }
        }
        
        /**
         * POPULANDO A MATRIZ ADIÇÃO
         */
         let saidaDeDados = document.getElementById('saidaDeDados');
         saidaDeDados.innerHTML = ``;
         saidaDeDados.innerHTML += `<h2>Resultado</h2>A + B`;
         saidaDeDados.innerHTML += `<form name="formularioSaida" id = "formularioSaida">`;
         let formularioSaida = document.getElementById("formularioSaida");
         for (i = 0; i <inputNumeroDeLinhas3; i++) {
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
    
    /**
     * MONTANDO A MATRIZ SUBTRAÇÃO
     */
    let inputNumeroDeLinhas5 = document.getElementById('inputNumeroDeLinhas1').value;
    let inputNumeroDeColunas5 = document.getElementById('inputNumeroDeColunas1').value;
    let inputNumeroDeLinhas51 = document.getElementById('inputNumeroDeLinhas2').value;
    let inputNumeroDeColunas51 = document.getElementById('inputNumeroDeColunas2').value;
    let matrizSubtracao = [];
    let matriz3 = [];

    /**
     * Criando os campos da matriz
     */
    if (inputNumeroDeColunas5 == inputNumeroDeColunas51 && inputNumeroDeLinhas5 == inputNumeroDeLinhas51) {
        for (i = 0; i < inputNumeroDeLinhas5; i++) {
            matrizSubtracao[i] = [];
            for (j = 0; j < inputNumeroDeColunas5; j++) {
                matrizSubtracao[i][j] = "";
            }
        }
 
        /**
         * POPULANDO A MATRIZ SUBTRAÇÃO
         */
         let saidaDeDados = document.getElementById('saidaDeDados');
         saidaDeDados.innerHTML = ``;
         saidaDeDados.innerHTML += `<h2>Resultado</h2>A - B`;
         saidaDeDados.innerHTML += `<form name="formularioSaida" id = "formularioSaida">`;
         let formularioSaida = document.getElementById("formularioSaida");
         for (i = 0; i <inputNumeroDeLinhas5; i++) {
             for (j = 0; j < inputNumeroDeColunas51; j++) {
                matrizSubtracao[i][j] += matriz1[i][j] + (matriz2[i][j])*-1;
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
    let matrizMultiplicacao1 = [];
    let matrizMultiplicacao2 = [];


    if (inputNumeroDeColunas4 == inputNumeroDeLinhas41) {
 
 /**********************
 * multiplicando os dados
 ******************** */
        let x = 0;

        for (i = 0; i < inputNumeroDeLinhas4; i++) {
            for (j = 0; j < inputNumeroDeColunas41; j++){
                for (k = 0; k <inputNumeroDeColunas4; k++){
                    matrizMultiplicacao.push(matriz1[i][k] * matriz2[k][j]);
                }
            }
        }
        console.log(matrizMultiplicacao)

        let arrayLength = 0;
        let contador = 0;
        let a = 0;

        if (inputNumeroDeColunas4 != 1 && inputNumeroDeLinhas41 != 1) {
            arrayLength = (matrizMultiplicacao.length/2);
            for (i = 0; i < arrayLength; i++) {
                for (j = 0; j < inputNumeroDeColunas4; j++) {
                    contador += matrizMultiplicacao[a];
                    a++
                }
                matrizMultiplicacao1.push(contador);
                contador = 0;
            }
        }
        else {
            matrizMultiplicacao1 = [...matrizMultiplicacao];
        }

        console.log(matrizMultiplicacao1)

        for (i = 0; i < inputNumeroDeLinhas4; i++) {
            matrizMultiplicacao2[i] = [];
            for (j = 0; j < inputNumeroDeColunas41; j++) {
                matrizMultiplicacao2 [i][j] = "";
            }
        }
        
         /**********************
         * populando a matriz
         ******************** */
        let d = 0;
        for (i = 0; i < inputNumeroDeLinhas4; i++) {
            for (j = 0; j < inputNumeroDeColunas41; j++) {
                    matrizMultiplicacao2 [i][j] = matrizMultiplicacao1[d];
                    d++
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
                formularioSaida.innerHTML += `<input type='text' class = 'inputSaidaDados' value = '${matrizMultiplicacao2 [i][j]}' readonly>`;
            }
            formularioSaida.innerHTML += `<br>`
        }
    }
    else {
        saidaDeDados.innerHTML = `<span style = 'color: red'>Para multiplicar matrizes, o número de colunas da primeira matriz
        deve ser igual ao número de linhas da segunda matriz.</span>`;
    }
    return matrizMultiplicacao2;
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



