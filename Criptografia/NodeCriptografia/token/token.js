import jwt from "jsonwebtoken";

const chaveSecreta = "chavesupersecreta";

const token = jwt.sign(
    {
        apelido: "cm",
        curso: "segurança e node.js"
    }, chaveSecreta
);

console.log(token);

const tokenDecodificado = jwt.verify(token, chaveSecreta);

console.log(tokenDecodificado);