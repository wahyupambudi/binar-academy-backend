// const fs = require("fs");
// const option = { encoding: "utf-8" };

// const callback = (err, data) => {
// 	console.log("Aku Muncul Kedua");
// 	if (err) return console.error("Error: ", err.message);
// 	console.log("Isi File:", data);
// };

// fs.readFile("contoh.txt", option, callback);
// console.log("Aku Muncul Pertama")

/* output 
Aku Muncul Pertama
Aku Muncul Kedua
Isi File: Halo Dunia! Kulo Wahyu Pambudi.
*/

// // contoh menggunakan readfilesync
// const fs = require("fs");
// const option = { encoding: "utf-8" };

// console.log("Aku Muncul Pertama");
// const data = fs.readFileSync("contoh.txt", option);
// console.log("Isi File:", data);

// console.log("Aku Muncul Ketiga");

// // perbedaan synchronous dan asynchronous
// // synchronous
// console.log("Hello Dunia");
// console.log("JavaScript");
// console.log("Developer");

/*
Hello Dunia
JavaScript
Developer
*/

// // asynchronous
// console.log("Hello Isekai");
// // output kode akan ditunda selama 100 milisecond
// setTimeout(() => {
// 	console.log("Javascript");
// }, 100);
// console.log("Developer");

/* 
Hello Isekai
Developer
Javascript
*/

// // another example asynchronous
// console.log("Tahap untuk Buat Kopi..")
// setTimeout(() => {console.log("Rebus Air Panas")}, 3000);
// setTimeout(() => {console.log("Masukkan Kopi dan Gula ke dalam Gelas")}, 4000);
// setTimeout(() => {console.log("Tuangkan Air Panas ke Dalam Gelas")}, 5000);
// setTimeout(() => {console.log("Aduk hingga merata ...")}, 6000);
// setTimeout(() => {console.log("Siapkan Gelas, Kopi, dan Gula")}, 1000);
// setTimeout(() => {console.log("Oke siap sudah")}, 11000);

// PAS MEETING BARENG MAS FADHIL

// const fs = require("fs");
// const option = { encoding: "utf-8" };

// const callback = (err, data) => {
// 	console.log("Muncul ke dua");
// 	if (err) return console.error("Error: ", err.message);
// 	console.log(`test data ${data}`);
// };

// fs.readFile("contoh.txt", option, callback);

// console.log("Muncul pertama");



// contoh menggunakan readfilesync
const fs = require("fs");
const option = { encoding: "utf-8" };

const callback = (err, data) => {
	console.log("Muncul ke dua");
	if (err) return console.error("Error: ", err.message);
	console.log(`test data ${data}`);
};

console.log("tes asynchronous material ----");
// const data = fs.readFile("contoh.txt", option, callback);
// dia muncul undefined karena proses callback belum selesaii
// console.log("Isi File:", data);
// tapi coba kalau settimeout
setTimeout(() => {
	const data1 = fs.readFile("contoh.txt", option, callback);
	console.log("Isi File:", data1);
}, 2000);

console.log("Aku Muncul Pertama");