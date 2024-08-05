// Ataque de Dicionário

import { createHash } from "crypto"

class Usuario {
    constructor(nome, senha) {
        this.nome = nome;
        this.hash = this.criaHash(senha);
    }

    criaHash(senha) {
        return createHash("sha256").update(senha).digest("hex");
    } 

    autentica(nome, senha){
        if(nome === this.nome && this.hash === this.criaHash(senha)) {
            console.log("Usuario autenticado com sucesso!");
            return true;
        } else {
            // console.log("Usuario ou senha incorretos");
            return false;
        }
    }
}

const usuario = new Usuario("Camilla", "senha123");

const senhasComuns = ["senha", "123456", "senha123", "admin"];

senhasComuns.map(senha => {
    if (usuario.autentica("Camilla", senha)){
        console.log(`A senha do usuario é ${senha}`);
    }
})
