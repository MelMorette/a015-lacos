// EXERCÍCIO 1 - NÍVEL DE USUÁRIO.
let tipoUsuario = prompt("Digite seu tipo de usuário:\nA: Administrador\nB: Usuário Comum\nC: Usuário Assinante").toUpperCase();

while (tipoUsuario !== "A") {
    alert("Acesso Negado!");
    tipoUsuario = prompt("Digite seu tipo de usuário:\nA: Administrador\nB: Usuário Comum\nC: Usuário Assinante").toUpperCase();
}
alert("Boas-Vindas, Admin");

// EXERCÍCIO 2 - TABUADA.
let respostaUser = true;

while(respostaUser === true){
    const tabuada = +prompt("Digite a tabuada que deseja saber:");
    const maxTabuada = +prompt("Digite o tamanho da sua tabuada:");
    console.log(`\nTabuada de ${tabuada}:`);
        for (let i = 1; i <= maxTabuada; i++) {
            tabuadaI = i * tabuada;
            console.log(`${tabuada} vezes ${i} é = ${tabuadaI}`);
        }
        respostaUser = confirm('Deseja ver outra tabuada?');    
}
alert('Ok, caso queira ver novamente é só dar um F5');

// EXERCÍCIO 3 - STRING EM CAIXA ALTA.
const myString = ["Akemi", "Ayumi", "Luna"];

for (let i = 0; i < myString.length; i++) {
    console.log(`Índice ${i}: ${myString[i].toUpperCase()}`);
}
