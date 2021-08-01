const fetch = require('node-fetch');

const result = fetch('https://jsonplaceholder.typicode.com/todos/1');

console.log(result);

result
  .then((resp) => {
    console.log("Transformando los datos desde el servidor");
    return resp.json();
  })
  .then(objeto => {
    console.log(`El resultado es`);
    console.log(objeto);
  });

// const meCumpli = false;
// let promise = new Promise((res, rej) => {
//   setTimeout(() => {
//     if (meCumpli) {
//       res("sí");
//     } else {
//       rej("no");
//     }
//   }, 1000);
// });

