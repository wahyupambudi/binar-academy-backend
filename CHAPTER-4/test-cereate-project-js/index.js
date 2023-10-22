const os = require('os')
const fs = require('fs')

// const check = fs.readFileSync('./test.txt', 'utf8')
// const writeFile = fs.writeFileSync('./write_file/test_person.json', JSON.stringify({
//     "name": "Wahyup",
//     "location": "Lampung",
//     "age": 22
// }))
// console.log(check)

// function PrintName(params) {
//     return `halo semua binarian`
// }

// module.exports = {
//     PrintName,
// }

// require("dotenv").config();

// // console.log("Hello World!")

// function printName() {
// 	return (`Halo Nama saya ${process.env.NAMA}`)
// }

// module.exports ={
// 	printName
// }


const {Client} = require('pg')
const client = new Client()

async function main() {
	await client.connect()

	const res = await client.query('SELECT * FROM')
}
