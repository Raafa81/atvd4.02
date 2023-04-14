export function ConteudoIgual(a: string[], b: string[]): boolean {
  if (a.length !== b.length) {
    return false;
  }
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }
  return true;
}

const array1 = ['olá', 'mundo', 'typescript'];
const array2 = ['typescript', 'mundo', 'olá'];
console.log(ConteudoIgual(array1, array2)); // deve exibir true

const array3 = ['hello', 'world'];
const array4 = ['world', 'hello'];
console.log(ConteudoIgual(array3, array4)); // deve exibir false

