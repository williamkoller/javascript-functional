# JavaScript Funcional

## Imperativo X Declarativo

### Imperativo

- Foco no fluxo
- Estados mutaveis
- Como
- Maior quantidade de codigo
- Baixo nivel de escalabilidade
- Mais conhecido
- Mais explicito

### Declarativo

- Foco na logica
- Imutabilidade
- O que
- Menor quantidade de codigo
- Alto nivel de escalabilidade
- Menos conhecido
- Menos explicito

Exemplo imperativo:

### JavaScript

```
const notas = [8.7, 6.8, 7.7, 7.7, 9.2, 5.3, 8.0];

function media(notas) {
  let soma = 0;
  for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
  }
  return soma / notas.length;
}

const mediaTurma = media(notas);

console.log(`A média da turma é ${mediaTurma.toFixed(2)}`); // 7.63
```

Exemplo declarativo:

### SQL

```
SELECT
  matricula, nome, email, media
FROM
  alunos
WHERE
  media >= 9
```

### JavaScript

```
const notas = [8.7, 6.8, 7.7, 7.7, 9.2, 5.3, 8.0];

const somar = (a, b) => a + b;

const dividir = (a, b) => a / b;

const mediaTurma = dividir(notas.reduce(somar), notas.length);

console.log(`A média da turma é ${mediaTurma.toFixed(2)}`); // 7.63
```

### Versao Procedural Imperativo

#### JavaScript

```
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

// version procedural

const aprovados = [];

for (let i = 0; i < alunos.length; i++) {
  if (alunos[i].nota >= 7) {
    aprovados.push(alunos[i]);
  }
}

console.log(aprovados);
```

### Versao Funcional Declarativo

```
const estaAprovado = (aluno) => aluno.nota >= 7;

const aprovadosDeclarativo = alunos.filter(estaAprovado);

console.log(aprovadosDeclarativo);
```