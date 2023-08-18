// exemplo de alunos aprovados - imperativo com procedural
const alunos = [
  {
    nome: 'João',
    nota: 5.0,
  },
  {
    nome: 'Maria',
    nota: 10,
  },
  {
    nome: 'José',
    nota: 4.6,
  },
  {
    nome: 'Ana',
    nota: 9.0,
  },
  {
    nome: 'Pedro',
    nota: 7.0,
  },
];

const aprovados = [];

for (let i = 0; i < alunos.length; i++) {
  if (alunos[i].nota >= 7) {
    aprovados.push(alunos[i]);
  }
}

console.log(aprovados);

console.log('----------------------');

// exemplo de alunos aprovados - declarativo funcional

const estaAprovado = (aluno) => aluno.nota >= 7;

const aprovadosDeclarativo = alunos.filter(estaAprovado);

console.log(aprovadosDeclarativo);
