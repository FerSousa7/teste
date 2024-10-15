console.log(`trabalhando com lista`);
//const salvador = `salvador`
//const saoPaulo = `são paulo`
//const rioDeJaneiro = `Rio De Janeiro`

const listaDeDestinos = new Array(
    `salvador`,
    `São paulo`,
    `Rio de Janeiro`
)

listaDeDestinos.push(`Curitiba`) // adicionado um item da lista 
console.log("Destinos possíveis");
//console.log(salvador, saoPaulo, rioDeJaneiro)
console.log(listaDeDestinos);

listaDeDestinos.splice(2, 1);
console.log(listaDeDestinos);


console.log(listaDeDestinos[1], listaDeDestinos[0]);