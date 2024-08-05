const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'];
console.log("Inicial: ", pilotos);

pilotos.pop(); // Remove o último
console.log(pilotos);

pilotos.push('Verstappen'); // Adiciona por último
console.log(pilotos);

pilotos.shift(); // Remove o primeiro
console.log(pilotos);

pilotos.unshift('Hamiton'); // Adiciona o primeiro
console.log(pilotos);

// Splice pode adicionar e remover elementos

// Adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa');
console.log(pilotos);

// Remover
pilotos.splice(3, 1); 
console.log(pilotos);

const algunsPilotos1 = pilotos.slice(2); // Novo Array a partir do indice 2
console.log(algunsPilotos1);

const algunsPilotos2 = pilotos.slice(1, 4); // Novo array do indice 1 ao 4 (sem incluir o indice 4)
console.log(algunsPilotos2);
