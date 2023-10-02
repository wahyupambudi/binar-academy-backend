// function perkalianMatematika(x, y) {
// 	try {
// 		// console.log(`ini proses perkalian matematika ${x * y}`)
// 		// // supaya error
// 		// console.log(`ini proses perkalian matematika ${x * a}`)

// 		if((x*y) < 10) {
// 			console.log(`ini number nya kekecilan`)
// 			return
// 		}

// 		console.log(`ini proses perkalian matematika ${x * y}`)
// 		return
// 	} catch(error) {
// 		// statements
// 		console.log(error);
// 		return
// 	}
// }

// perkalianMatematika(5,5)


function perkalianMatematika(x, y) {
	try {
		if((x*y) < 10) {
			throw new Error(`hasil dari proses kekecilan`)
			return
		}

		console.log(`ini proses perkalian matematika ${x * y}`)
		return
	} catch(error) {
		// statements
		console.log(error);
		return
	}
}

perkalianMatematika(5,1)


// // contoh untuk studi kasus pesawat terbang
// function terbang(ketinggian) {
// 	if(ketinggian > 10000) throw new Error("Terlalu tinggi")
// 		return "pesawat berada di ketinggian yang aman"
// }

// try {
// 	let status = terbang(1000)
// 	console.log(status)
// } catch(error) {
// 	// statements
// 	console.log(error)
// }
