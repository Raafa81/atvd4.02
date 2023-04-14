export function compararMatrizes(a: string[][], b: string[][]): boolean {
    if (a.length !== b.length) {
      return false;
    }
    for (let i = 0; i < a.length; i++) {
      if (JSON.stringify(a[i]) !== JSON.stringify(b[i])) {
        return false;
      }
    }
    return true;
  }
  
const matriz1 = [
  ['olá', 'mundo', 'typescript'],
  ['programação', 'é', 'legal']
];
const matriz2 = [
  ['typescript', 'mundo', 'olá'],
  ['é', 'legal', 'programação']
];
console.log(compararMatrizes(matriz1, matriz2)); // deve exibir true

const matriz3 = [
  ['hello', 'world'],
  ['foo', 'bar', 'baz']
];
const matriz4 = [
  ['world', 'hello'],
  ['foo', 'baz', 'bar']
];
console.log(compararMatrizes(matriz3, matriz4)); // deve exibir false
