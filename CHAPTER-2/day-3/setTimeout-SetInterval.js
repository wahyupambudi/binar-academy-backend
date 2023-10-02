// // asynchronous process
// console.log("Hello World!!");

// // output kode akan ditunda selama 10 milisecond
// setTimeout(() => {
// 	console.log("JavaScript");
// }, 100);
// console.log("Developer");

/* output :
Hello World!!
Developer
Javascript
*/

// // another example settimeout
// console.log("Aku Keluar Pertama");

// setTimeout(() => {
// 	console.log("Aku Keluar setelah 3 Detik");
// }, 3000);

// // walaupun 0 tetap dianggap sebagai asynchronous
// setTimeout(() => console.log("Apakah Aku yang kedua"), 0);

// console.log("Apakah aku yang ketiga")


// // setInterval
// setInterval mirip dengan setTimeout, tapi setInterval ini bakal berjalan berulang kali berdasarkan interval-nya.

// let a = 0;
// const iniInterval = setInterval(() => {
// 	console.log(`${++a} kali jalan`)
// 	if(a === 10) clearInterval(iniInterval)
// }, 100)

// console.log("Apakah Aku Jalan Duluan")

/* output :
Apakah Aku Jalan Duluan
1 kali jalan
2 kali jalan
3 kali jalan
4 kali jalan
5 kali jalan
6 kali jalan
7 kali jalan
8 kali jalan
9 kali jalan
10 kali jalan
*/