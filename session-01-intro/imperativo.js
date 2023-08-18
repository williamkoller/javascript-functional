const names = ['John', 'Peter', 'James'];

const transformNamesToUpperCase = (names) => {
  const newNames = [];
  for (let i = 0; i < names.length; i++) {
    newNames.push(names[i].toUpperCase());
  }
  return newNames;
};

console.log(transformNamesToUpperCase(names));

const notas = [8.7, 6.8, 7.7, 7.7, 9.2, 5.3, 8.0];

function media(notas) {
  let soma = 0;
  for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
  }
  return soma / notas.length;
}

const mediaTurma = media(notas);

console.log(`A média da turma é ${mediaTurma.toFixed(2)}`);
