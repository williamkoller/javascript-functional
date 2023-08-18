// function declaration
function dobro(x) {
  return 2 * x;
}

console.log(dobro(10));

// function expression
const quadrado = function (x) {
  return x * x;
};

console.log(quadrado(10));

// function expression with arrow function

const cubo = (x) => x * x * x;

console.log(cubo(10));

// function composition

const composicao = (f, g) => (x) => f(g(x));

const dobroDoQuadrado = composicao(dobro, quadrado);

console.log(dobroDoQuadrado(10));
