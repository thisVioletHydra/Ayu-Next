import { Buffer } from 'node:buffer';
import fs, { access, readFile, writeFile } from 'node:fs/promises';

import type { MySort } from './dummy/takeme';

import { MyClassName } from './dummy/calc';
import { mySort } from './dummy/takeme';

// console.log(`[LOG] MyClassName`, `<${typeof MyClassName}>`, MyClassName);

// async function sfd() {
//   await readFile('');
// }

// const list = [4, 1, 2, 5, 4, 2, 6, 7];
// const [x, y] = [4, 1, 2, 5, 4, 2, 6, 7];
// console.log(`[LOG] y`, `<${typeof y}>`, y);
// console.log(`[LOG] x`, `<${typeof x}>`, x);

// const result = mySort(list as MySort);
// console.log(`[LOG] result`, `<${typeof result}>`, result);

// const dummyObject = {
//   data0: [
//     { count: 2, length: 1, skill: 'Analyzing' },
//     { count: 4, length: 1, skill: 'Activating' },
//     { count: 4, length: 1, skill: 'Using' },
//     { skill: 'Inferring' },
//     { skill: 'Predicting' },
//     { skill: 'Summarizing' },

//   ],
//   data1: [
//     { skill: 'Using' },
//     { skill: 'Analyzing' },
//     { count: 2, length: 1, skill: 'Summarizing' },
//     { skill: 'Inferring' },
//     { skill: 'Predicting' },
//     { skill: 'Activating' },
//   ],
//   data2: [
//     { skill: 'Using' },
//     { count: 4, length: 1, skill: 'Analyzing' },
//     { skill: 'Summarizing' },
//     { skill: 'Inferring' },
//     { count: 1, length: 1, skill: 'Predicting' },
//     { skill: 'Activating' },
//   ],
// };
// const uniqueSkills = ['asdasd', 'asdasd', 'asdasdasd'];
// const data = [1, 23, 54, 6, 7, 87, 8];

// for (const key of Object.keys(data)) {
//   for (let index_ = 0; index_ < uniqueSkills.length; index_++) {
//     if (typeof data[key][index_] === 'object') {
//       if (data[key][index_].skill !== uniqueSkills[index_]) {
//         const index = uniqueSkills.indexOf(data[key][index_].skill);
//         if (typeof data[key][index] === 'object') {
//           const anotherIndex = uniqueSkills.indexOf(data[key][index].skill);
//           const elementAtIndex = data[key][index];

//           const elementAtAnotherIndex = data[key][anotherIndex];
//           data[key][index_] = elementAtIndex;
//           data[key][index] = elementAtAnotherIndex;
//         } else {
//           data[key][index] = data[key][index_];
//           data[key][index_] = { skill: uniqueSkills[index_] };
//         }
//       }
//     } else {
//       data[key][index_] = { skill: uniqueSkills[index_] };
//     }
//   }
// }

// [...Array.from({ length: 11 }).keys()].filter(Boolean).filter(Boolean).filter(Boolean).map(Number);

// let foo;

// function_(...args);
// [...items, 4, 5, 6];
// let [a, b, ...items] = [1, 2, 3, 4, 5];
// function function_(...rest) {
//   console.log(rest);
// }
// let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
// const n = { x, y, ...z };

// typeof !foo;

// void { foo: 0 };

// new [foo][0]();

// delete (foo.bar);

// ++foo;

// foo--;

// -foo;

// +'3';

// function* generator() {
//   yield* other();
// }

// (foo) => bar;

// (foo) => (bar);

// (foo) => (bar) => baz;

// (foo) => (
//   bar()
// );

// if (a) {
//   b = c;
//   function foo(d) {
//     e = f;
//   }
// }

// bar('one', 'two', {
//   one: 1,
//   two: 2,
// });

// (a) => {};
// (a) => {};

// if (a
//   && b
//   && c
//   && (d
//   || e
//   || f
//   )
// ) {
//   foo();
// }

// type Foo<T = true> = T;
// type Foo<T, K> = T;

// interface Log {
//   foo: <T>(name: T) => void
// }

// type T = [i: number];
// type T = [i?: number];
// type T = [i: () => void, j: number];

// var foo = bar > baz
//   ? value1
//   : value2;

// const xo = [1, 2, 3, 4, 5];

// function isEmpty() {
//   if (xo.length > 0) return true;
// }
// const ola = {};

// const list1 = [1, 23, 34, 54, 56, 56, 56, 4564];

// for (const [index, element] of list1.entries()) {
//   console.log(index, element);
// }

// if (!foo && !bar) {
//   // …
// }

// function name(parameters: type) {
//   const aaa = false;

//   if (foo) {
//     console.log('✅');
//   } else {
//     console.log('❌');
//   }
// }

// name();

// const length = 10;
// const array = Array.from({ length });

// const buffer = Buffer.from('7468697320697320612074c3a97374', 'hex');

// const item = array.find((x) => isUnicorn(x));
// const item = array.find((x) => isUnicorn(x));
// const item = array.find((x) => isUnicorn(x));
// item = array.find((x) => isUnicorn(x));

// const foo = baz.startsWith('bar');

// const c = 1;

// a = (b * c);

// const regex = /\d/;
// const regex = /\D/;

// fn();

// async function asdasdasdasd(parameters: any) {
//   access('.');
// }

import file from './dummy/index';

console.log(`[LOG] file`, `<${typeof file}>`, file);

const fooo = [
  1,
  2,
  3,
];

Array.isArray(fooo);

const arrayLike = {

  length: 3,
  0: 1,
  1: 2,
  2: 3,
};

console.log('asdasdasd');
const array = Array.from(arrayLike, (f) => f + 1);
console.log(`[LOG] array`, `<${typeof array}>`, array);

const promise = new Promise((resolve, reject) => {
  reject(new Error('asdasd'));
});

console.log(`[LOG] promise`, `<${typeof promise}>`, promise);

function returnsAny() {
  return {} as unknown;
}

const a: (string | number)[] = [
  'a', 'b',
];
const b: { prop: string }[] = [
  { prop: 'a' },
];
const c: (() => void)[] = [
  () => {},
];
const d: MyType[] = [
  'a', 'b',
];
const easdasd: string[] = [
  'a', 'b',
];
const f: readonly string[] = [
  'a', 'b',
];

const mapx = new Map<string, number>(); const x = { foo: 1 } as T; const xx: T = { foo: 1 };
const y = {
  foo: 1,
  asd: 2,
  dfgdfg: 3,
  asdasd: 4,
  asdasdasd: 5,
} as any;
const z = { foo: undefined } as unknown;

type helloworld = string | number;

interface helloworl1d {
  foo: number; bar: string;
}

function name(parameters, asd, qwe, we, rt, yu, io, fg, as) {
  return 1;
}

export type GetUserSessionResponse = {
  claims: Record<string, any>;
  createdOn: number;
  expiresIn?: number;
  subject: string;
};

interface Foo {
  name: string; greet: () => string; asdas: 'asdasd'; 123: 'bcvbcb'; dfgdfg: 111;
}

// incorrect delimiter
type FooBar = { name: string; greet: () => string };

const object_ = {};
const foo = object_.property;

const bar = (

  object__

)
  .property;

const baz = object_.property;

(foo) => bar;

const object = {
  myObjectFunction() {
    return 1;
  },
  one: 1,
  seven: 7,
};

let barasdad; let bazasdasdsad;

const object__ = {
  foo: 'foo',
  bar: 'bar',
};
const list = [1];

promise.then((value) => {
  window.postMessage(value);

  return value;
}).catch((error) => {
  console.log(`[LOG] error`, `<${typeof error}>`, error);
});

(() => {})();

function foo() {}
foo();

const promise_ = new Promise((resolve, reject) => {
  reject(new Error('asdasd'));
});
await promise_;

foo('one', 'two', 'three');

function fooQ(...argument: unknown[]) {}

fooQ(
  'one',
  'two',
  'three',
);
function fooQ1({
  one, qweqwe, two, two1, asdasd, three,
}: Record<string, number>) {}

fooQ1({
  one: 2,
  two: 2,
  three: 2,
});

const ads = 1;
ads === undefined
  ? console.log('')
  : console.log('');