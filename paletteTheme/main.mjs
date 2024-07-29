// await promise;
// await Promise.all([promise1, promise2]);

// const object = { ...foo };

// const object1 = { ...foo };

// myPromise.then((value) => {});
// myPromise.then(() => {
//   return doSomething();
// });
// myPromise.then((b) => {
//   if (b) {
//     return 'yes';
//   } else {
//     forgotToReturn();
//   }
// });

// new Promise((resolve, reject) => {
//   return result;
// });
const fooo = [1, 2, 3];

Array.isArray(fooo);

const arrayLike = {
  length: 3,
  0: 1,
  1: 2,
  2: 3,
};

const array = Array.from(arrayLike, (f) => f + 1);
console.log(`[LOG] array`, `<${typeof array}>`, array);

console.log('asdasdasd');