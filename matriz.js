/**
 * Fazer um programa para ler dois números inteiros positivos M e N (máximo igual a 5),
 * depois ler uma matriz de M linhas e N colunas contendo números inteiros.
 * Em seguida, mostrar na tela a matriz lida conforme exemplo
 */

let qtdLinhas = prompt("Quantas linhas terá a matriz?");
let qtdColunas = prompt("Quantas colunas terá a matriz?");
// let qtdLinhas = 3;
// let qtdColunas = 3;
// let matriz = [[0, 0, 0],
//               [1, 1, 0],
//               [2, 2, 0]];
let matriz = new Array (qtdLinhas, qtdColunas);
let valores = '';

for (let l = 0; l < qtdLinhas; l++) {
    for (let c = 0; c < qtdColunas; c++) {
        matriz.push(prompt("Digite o elemento para a linha " + parseInt(l+1) + ", coluna " + parseInt(c+1)));
    }
}

console.log(matriz[1][0])

for (let l = 0; l < qtdLinhas; l++) {
    for (let c = 0; c < qtdColunas; c++) {
        if (c < qtdColunas-1) {
            valores += matriz[l][c] + "\t";
        }
        else {
            valores += matriz[l][c] + "\n";
        }
    }
}

// for (let l = 0; l < qtdLinhas; l++) {
//     for (let c = 0; c < qtdColunas; c++) {
//         if (c < qtdColunas-1) {
//             valores += matriz[l][c] + "\t";
//         }
//         else {
//             valores += matriz[l][c] + "\n";
//         }
//     }
// }

alert(valores);

