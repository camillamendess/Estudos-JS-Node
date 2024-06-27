function cifrar(offset, mensagem) {
    let resultado = "";
    for (let i = 0; i < mensagem.length; i++) {
      let codLetraAscii = mensagem.charCodeAt(i);
      if (codLetraAscii >= 65 && codLetraAscii <= 90) {
        let calculoOffset = ((codLetraAscii - 65 + offset) % 26) + 65;
        resultado += String.fromCharCode(calculoOffset);
      } else if (codLetraAscii >= 97 && codLetraAscii <= 122) { 
        let calculoOffset = ((codLetraAscii - 97 + offset) % 26) + 97;
        resultado += String.fromCharCode(calculoOffset);
      } else {
        resultado += String.fromCharCode(codLetraAscii); 
      }
    }
    return resultado;
}

const cifra1 = cifrar(1, "BANANA"); 
const cifra2 = cifrar(6, "ZUMBA"); 
console.log(cifra1 + "\n" + cifra2); //CBOBOB e FASHG

function decode(offset, mensagem) {
    let resultado = "";
    for (let i = 0; i < mensagem.length; i++) {
        let codLetraAscii = mensagem.charCodeAt(i);
        if (codLetraAscii >= 65 && codLetraAscii <= 90) {
            let calculoOffset = ((codLetraAscii - 90 - offset) % 26) + 90;
            resultado += String.fromCharCode(calculoOffset);
        } else if (codLetraAscii >= 97 && codLetraAscii <= 122) {
            let calculoOffset = ((codLetraAscii - 122 - offset) % 26) + 122;
            resultado += String.fromCharCode(calculoOffset);
        } else {
            resultado += String.fromCharCode(codLetraAscii);
        }
        
    }
    return resultado;
}

console.log(decode(1, cifra1)); // BANANA
console.log(decode(6, cifra2)); // ZUMBA
