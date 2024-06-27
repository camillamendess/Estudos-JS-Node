const senhaSecreta = "euamomusica";
console.log(senhaSecreta);

function cifrarMensagem (mensagem, movimentos){
 const mensagemCifrada = mensagem.split('').map((caractere) => {
 const codigoCaractere = caractere.charCodeAt(0);
 return String.fromCharCode(codigoCaractere + movimentos)
})
 return mensagemCifrada.join("")
}

const mensagemCifrada = cifrarMensagem(senhaSecreta, 4);

console.log(mensagemCifrada) // iyeqsqywmge - Mensagem cifrada, cada caractere deslocado 4 vezes no alfabeto

function decifrarMensagem (mensagem, movimentos){
    const mensagemDecifrada = mensagem.split('').map((caractere) => {
        const codigoCaractere = caractere.charCodeAt(0);
        return String.fromCharCode(codigoCaractere - movimentos)
    })
    return mensagemDecifrada.join("")
}

const mensagemDecifrada = decifrarMensagem(mensagemCifrada, 4);

console.log(mensagemDecifrada); // euamomusica - volta ao original, deslocando a posição inicial 