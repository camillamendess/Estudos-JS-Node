// Definindo um objeto 'obj' utilizando a notação literal
const obj = {
    // Definindo propriedades 'a', 'b' e 'c' com valores numéricos
    a: 1,
    b: 2,
    c: 3,
    // Definindo um método 'soma' que retorna a soma dos valores das propriedades 'a', 'b' e 'c'
    soma(){
        return a + b + c 
    }
}

// Exibindo o objeto 'obj' no console
console.log(obj);

// Convertendo o objeto 'obj' para uma string JSON e exibindo no console
console.log(JSON.stringify(obj));

// Convertendo uma string JSON para um objeto JavaScript e exibindo no console
console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}'));
