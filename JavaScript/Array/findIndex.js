// Definindo um array de números
const numbers = [10, 20, 30, 40, 50];

// Função para encontrar o índice de um elemento no array
function findIndexExample(array, indexValue) {
    // Usando o método findIndex() para procurar o índice do elemento
    const index = array.findIndex(function(element) {
        // Retorna true se o elemento atual for igual ao valor do índice
        return element === indexValue;
    });

    // Retorna o índice encontrado (ou -1 se não encontrado)
    return index;
}

// Valor do índice que queremos encontrar no array
const indexValueToFind = 30;

// Chamando a função e armazenando o resultado
const resultIndex = findIndexExample(numbers, indexValueToFind);

// Verificando se o elemento foi encontrado ou não
if (resultIndex !== -1) {
    console.log(`O elemento ${indexValueToFind} foi encontrado no índice ${resultIndex}.`);
} else {
    console.log(`O elemento ${indexValueToFind} não foi encontrado no array.`);
}
