/* 
Elabore uma função que recebe um objeto com estudantes e suas notas. As notas de cada estudante estarão num array. Você deverá calcular a média da nota de cada aluno e retornar um objeto com os atributos nome e media, que indica o aluno que teve o melhor desempenho nas notas.
*/

const estudantes = {
  Joao: [8, 7.6, 8.9, 6],
  Mariana: [9, 6.6, 7.9, 8],
  Carla: [7, 7, 8, 9],
};

function receberMelhorEstudante(objeto) {
  let estudante = {
    nome: "Fulano",
    media: 0,
  };

  for (let i in objeto) {
    const array = objeto[i];

    let nota = 0;
    for (let i = 0; i < array.length; i++) {
      nota = nota + array[i];
    }

    let media = nota / 4;

    if (media > estudante.media) {
      estudante.media = media;
      estudante.nome = i;
    }
  }

  return estudante;
}

console.log(receberMelhorEstudante(estudantes));

// Maneira mais simplificada de fazer

function receberMelhorEstudante2(objeto) {
  let melhorEstudante = {
    nome: "",
    media: 0,
  };

  for (let nome in objeto) {
    const notas = objeto[nome];
    // Usanddo o reduce, acc = acumulador, curr = valor atual, 0 = valor inicial
    const media = notas.reduce((acc, curr) => acc + curr, 0) / notas.length;

    if (media > melhorEstudante.media) {
      melhorEstudante.nome = nome;
      melhorEstudante.media = media;
    }
  }

  return melhorEstudante;
}

console.log(receberMelhorEstudante2(estudantes));
