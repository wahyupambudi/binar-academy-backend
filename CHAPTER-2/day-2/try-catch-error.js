function terbang(ketinggian) {
	if(ketinggian > 10000) throw new Error("Terlalu tinggi")
		return "pesawat berada di ketinggian yang aman"
}

try {
	let status = terbang(1000)
	console.log(status)
} catch(error) {
	// statements
	console.log(error)
}