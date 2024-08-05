import { createHash } from "crypto";

function criaHash(senha) {
    return createHash("sha256").update(senha).digest("hex");
} 

console.log(criaHash("Uma String qualquer"));

class Usuario {
    constructor(nome, senha) {
        this.nome = nome;
        this.hash = criaHash(senha);
    }

    autentica(nome, senha){
        if(nome === this.nome && this.hash === criaHash(senha)) {
            console.log("Usuario autenticado com sucesso!");
            return true;
        } else {
            console.log("Usuario ou senha incorretos")
            return false;
        }
    }

}

const usuario = new Usuario("Camilla", "minhasenha");

console.log(usuario);

// Caso de sucesso
usuario.autentica("Camilla", "minhasenha");

// Casos de fracassos
usuario.autentica("cm", "minhasenha"); // Nome
usuario.autentica("Camilla", "minhasenh"); // Senha