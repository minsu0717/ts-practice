// number
// string
// boolean
// null
// undefined
// any

let a: number = 3;
let b: string = "love you";

let c: any = 4;

c = "asdfasdfadsf";

let d: number | string = "asdfasd";
d = 123;

let e: number[] = [1, 2];

function addNumber(a: number, b: number): number {
  return a + b;
}

addNumber(1, 2);
