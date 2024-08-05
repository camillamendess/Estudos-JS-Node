import { scryptSync, randomBytes, timingSafeEqual } from "crypto";

function criarHashComSal(senha){
    // Gerador de numero aleatório
    const sal = randomBytes(16).toString("hex");

    const senhaHasheada = scryptSync(senha, sal, 64).toString("hex");

    return `${sal}:${senhaHasheada}`
}

class Usuario {
    constructor(nome, senha){
        this.nome = nome;
        [this.sal, this.hash] = criarHashComSal(senha).split(":");
    }

    autentica(nome, senha) {
        if (nome === this.nome){
            const testeHash = scryptSync(senha, this.sal, 64);
            const hashReal = Buffer.from(this.hash, "hex");

            const hashesCorrespondem = timingSafeEqual(testeHash, hashReal);

            if(hashesCorrespondem){
                console.log("Usuario autenticado com sucesso!")
                return true;
            } 
        }
        console.log("Usuario ou senha incorretos");
    }
}

const cm = new Usuario("Camilla", "senhaSecreta");

console.log(cm)

// Teste de Sucesso
cm.autentica("Camilla", "senhaSecreta");

// Teste de fracasso
cm.autentica("Cami", "senhaSecreta");
cm.autentica("Camilla", "senha");