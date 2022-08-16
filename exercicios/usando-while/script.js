let num = +prompt("Digite um número:\nPara sair, digite 0");
let soma = 0;

while (num !== 0) {
    soma += num;
    num = +prompt("Digite um número:\nPara sair, digite 0");
}

alert(`A soma dos números é: ${soma}`);

