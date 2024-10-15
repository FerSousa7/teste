console.log(`trabalhando com condicionais`);


const listaDeDestinos = new Array(
    `salvador`,
    `São paulo`,
    `Rio de Janeiro`
)

const idadeComprador = 18;
const estaAcompanhada = true;


console.log("Destinos possíveis");
console.log(listaDeDestinos);

if (idadeComprador >= 18) {
    console.log("Comprador maior de idade");
    listaDeDestinos.splice(1, 1);   //removendo item
} else if (estaAcompanhada == true) {
    console.log("Comprador está acompanhado");
    listaDeDestinos.splice(1, 1);   //removendo item
} else {
    console.log("não é maior de idade e não posso vender")

}

console.log("embarque: \n\n")
if (idadeComprador >= 18 && temPassagemComprada) {
    console.log("Boa viagem");
} else {
    console.log("Você não pode embarcar");
}



console.log(listaDeDestinos);

// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador == 18);