// 1. Buatlah fungsi takeOff(altitude) yang menerima altitude sebagai ketinggian penerbangan dalam meter.
// Kemudian, lakukan langkah-langkah berikut:
// ● Jika altitude lebih dari 10000, lemparkan error dengan pesan "Ketinggian terlalu tinggi!".
// ● Jika altitude negatif, lemparkan error dengan pesan "Ketinggian tidak valid!".
// ● Jika altitude valid (antara 0 hingga 10000), kembalikan pesan "Pesawat lepas landas menuju ketinggian " + altitude + " meter."
// 2. Buatlah fungsi flightSimulation(altitude) yang memanggil takeOff(altitude) dan menangani error yang mungkin muncul. Gunakan try...catch untuk menangkap error.
// 3. Panggil flightSimulation(12000) dan tangkap pesan error yang mungkin muncul. Tampilkan pesan error di konsol.
// 4. Panggil flightSimulation(-500) dan tangkap pesan error yang mungkin muncul. Tampilkan pesan error di konsol.
// 5. Panggil flightSimulation(8000) dan tangkap pesan keluaran. Jika tidak ada error, tampilkan pesan hasil di  konsol.

// function takeOff(altitude) {
// 	if (altitude > 10000) {
// 		throw new Error("Ketinggian Terlalu Tinggi");
// 	} else if (altitude < 0) {
// 		throw new Error("Ketinggian tidak valid!");
// 	} else if (altitude >= 0 && altitude <= 10000) {
// 		return `Pesawat lepas landas menuju ketinggian ${altitude} meter`;
// 	}
// }

// function flightSimulation(altitude) {
// 	try {
// 		let message = takeOff(altitude)
// 		console.log(message)
// 	} catch(error) {
// 		console.log(error)
// 	}
// 	return;
// }

// console.log("Jika Ketinggian 12000 meter:")
// flightSimulation(12000)
// console.log("\nJika Ketinggian -500 meter:")
// flightSimulation(-500)
// console.log("\nJika Ketinggian 8000 meter:")
// flightSimulation(8000)

// menggunakan class
class Garuda {
	constructor() {
		console.log("Simulator Pesawat\n")
	}

	takeOff(altitude) {
		if (altitude > 10000) {
			throw new Error("Ketinggian Terlalu Tinggi");
		} else if (altitude < 0) {
			throw new Error("Ketinggian tidak valid!");
		} else if (altitude >= 0 && altitude <= 10000) {
			return `Pesawat lepas landas menuju ketinggian ${altitude} meter`;
		}
	}

	flightSimulation(altitude) {
		try {
			let message = this.takeOff(altitude);
			console.log(message);
		} catch (error) {
			console.log(error);
		}
		return;
	}
}

let garuda = new Garuda();

console.log("Jika Ketinggian 12000 meter:");
garuda.flightSimulation(12000);
console.log("\nJika Ketinggian -500 meter:");
garuda.flightSimulation(-500);
console.log("\nJika Ketinggian 8000 meter:");
garuda.flightSimulation(8000);
