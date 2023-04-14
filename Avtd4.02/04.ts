export function comparar(a: string[][], b: string[][]): (string | undefined)[][] {
    const result: (string | undefined)[][] = [];
    for (let i = 0; i < a.length; i++) {
      if (a[i].length !== b[i].length) {
        result.push(undefined);
      } else {
        const linha: (string | undefined)[] = [];
        for (let j = 0; j < a[i].length; j++) {
          if (a[i][j] === b[i][j]) {
            linha.push(a[i][j]);
          } else {
            linha.push(undefined);
          }
        }
        result.push(linha);
      }
    }
    return result;
  }

const matriz1 = [
  ['olá', 'mundo', 'typescript'],
  ['programação', 'é', 'legal']
];
const matriz2 = [
  ['typescript', 'mundo', 'olá'],
  ['é', 'legal', 'programação']
];
console.log(comparar(matriz1, matriz2)); // deve exibir [['undefined', 'mundo', 'undefined'], ['undefined', 'undefined', 'undefined']]

const matriz3 = [
  ['hello', 'world'],
  ['foo', 'bar', 'baz']
];
const matriz4 = [
  ['world', 'hello'],
  ['foo', 'baz', 'bar']
];
console.log(comparar(matriz3, matriz4)); // deve exibir [[undefined, undefined], [undefined, undefined, undefined]]
