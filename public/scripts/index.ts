/*
 * Contoh kode untuk membaca query parameter,
 * Siapa tau relevan! :)
 * */

import App from "./App";

const urlSearchParams = new URLSearchParams(window.location.search);
// const params = Object.fromEntries(urlSearchParams.entries());

// Coba olah data ini hehe :)
// console.log(params);

/*
 * Contoh penggunaan DOM di dalam class
 * */
const app = new App();

app.init();
// app.init().then(app.run);

