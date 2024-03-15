// Removendo elementos em indices aleátorios de um array

// Definindo um array de frutas
let fruits = ['Maçã', 'Banana', 'Pêra', 'Uva', 'Morango'];

// Função para remover um elemento de um índice específico no array
function removeElementAtIndex(array, indexToRemove) {
    // Verifica se o índice está dentro dos limites do array
    if (indexToRemove >= 0 && indexToRemove < array.length) {
        // Remove 1 elemento no índice especificado usando splice
        array.splice(indexToRemove, 1);
        return true; // Indica que o elemento foi removido com sucesso
    } else {
        return false; // Indica que o índice está fora dos limites do array
    }
}

// Índice do elemento que queremos remover
const indexToRemove = 2; // Pêra

// Chamando a função para remover o elemento do índice especificado
const removed = removeElementAtIndex(fruits, indexToRemove);

// Verificando se o elemento foi removido com sucesso
if (removed) {
    console.log(`O elemento no índice ${indexToRemove} foi removido com sucesso.`);
    console.log('Array atualizado:', fruits);
} else {
    console.log(`Não foi possível remover o elemento no índice ${indexToRemove}. Índice inválido.`);
}

