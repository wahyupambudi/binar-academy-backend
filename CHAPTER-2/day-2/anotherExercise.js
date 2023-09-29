// validasi formulir
class ValidasiFormulir{
	constructor() {
		console.log("Aplikasi Validasi Umur")
	}

	formPerson(name, age) {
		if(name === "" && age === "") {
			throw new Error("Nama dan Umur tidak boleh kosong")
		} else if(age <= 18) {
			throw new Error("Umur harus lebih dari 18 tahun")
		} else {
			return `Selamat Datang ${name} dengan umur ${age}`
		}
	}

	validPerson(name, age) {
		try {
			let message = this.formPerson(name, age)
			console.log(message)
		} catch(error) {
			// statements
			console.log(error);
		}
	}
}

let validasiFormulir = new ValidasiFormulir();

validasiFormulir.validPerson("", "");
validasiFormulir.validPerson("Budi", 10);
validasiFormulir.validPerson("Wahyu", 20);


// Kasus 2 : Pengelolaan Stok Barang
// Anda mengembangkan sistem manajemen stok barang untuk sebuah toko online. Implementasikan fungsi checkStock yang menerima dua parameter: productName dan quantity. Fungsi ini harus memeriksa apakah barang dengan nama productName memiliki stok yang cukup untuk memenuhi quantity yang diminta. Jika tidak, lemparkan error dengan pesan "Stok tidak mencukupi!". Tangkap error tersebut menggunakan try...catch dan tampilkan pesan error kepada pengguna.

// Untuk kedua studi kasus tersebut, berikan implementasi JavaScript yang mencakup penggunaan throw dan try...catch, serta contoh panggilan fungsi yang memicu error dan menangkap error tersebut. Jelaskan langkah-langkah yang diambil untuk menangani error dengan baik.

class InventoryManager {
	constructor() {
		this.stock = {
			"Product A": 30,
			"Product B": 12,
			"Product C": 40,
		}
	}

	checkStock(productName, quantity) {
		// jika tidak ada product di this.stock atau this.stock product name kurang dari quantity
		if(!(productName in this.stock) || this.stock[productName] < quantity) {
			throw new Error("Stok Tidak Mencukupi")
		}
		return `Stok cukup untuk ${productName} (${quantity} unit).`;
	}

	validationStock(productName, quantity) {
		try {
			let message = this.checkStock(productName, quantity)
			console.log(message)
		} catch(e) {
			// statements
			console.log(e);
		}
	}

}

const manager = new InventoryManager()
manager.validationStock("Product A", 20)
manager.validationStock("Product B", 12)
manager.validationStock("Product C", 50)

// const a = {
// 	"Product A": 30,
// 	"Product B": 12,
// 	"Product C": 40,
// }

// for(let b in a){
// 	console.log(b)
// }

// function tes(product) {
// 	return(product in a);
// }