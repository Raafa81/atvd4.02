export function comparar(a: string[], b: string[]): string[] | undefined {
    if (a.length !== b.length) {
      return undefined;
    }
    const result: string[] = [];
    for (let i = 0; i < a.length; i++) {
      if (a[i] === b[i]) {
        result.push(a[i]);
      } else {
        result.push('undefined');
      }
    }
    return result;
  }

const array1 = ['olá', 'mundo', 'typescript'];
const array2 = ['typescript', 'mundo', 'olá'];
console.log(comparar(array1, array2)); // deve exibir undefined

const array3 = ['hello', 'world'];
const array4 = ['world', 'hello'];
console.log(comparar(array3, array4)); // deve exibir [undefined, undefined]

  