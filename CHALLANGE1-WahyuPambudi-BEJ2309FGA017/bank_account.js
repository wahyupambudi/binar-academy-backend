// jika localstorage saldo nan maka set localstorage saldo 0
if (isNaN(parseFloat(localStorage.getItem("saldo")))) {
	saldo = localStorage.setItem("saldo", 0);
}

// tampilkan di html.
document.getElementById("saldo").innerHTML = new Intl.NumberFormat("id").format(
	localStorage.getItem("saldo"),
);

class myBank {
	constructor() {
		this.saldo = 0;
	}

	tambahSaldo() {
		const inputJumlah = parseFloat(prompt("Masukkan Jumlah Depo Saldo: "));
		if (!isNaN(inputJumlah) && inputJumlah > 0) {
			let sumSaldo =
				parseFloat(localStorage.getItem("saldo")) + inputJumlah;
			// simpan ke dalam localstorage
			localStorage.setItem("saldo", sumSaldo);
		} else {
			alert("Input kan dengan format Angka");
		}
		// reload
		document.location.reload();
	}

	kurangiSaldo() {
		const inputKurang = parseFloat(
			prompt("Masukkan Jumlah Withdraw Saldo: "),
		);
		let getSaldo = parseFloat(localStorage.getItem("saldo"));

		if (getSaldo < inputKurang) {
			alert("Tidak bisa ambil lebih dari total saldo");
		} else if (!isNaN(inputKurang) && inputKurang > 0) {
			let minSaldo = parseFloat(getSaldo - inputKurang);
			// simpan ke dalam localstorage
			localStorage.setItem("saldo", minSaldo);
		} else {
			alert("Input kan dengan format Angka");
		}

		// reload
		document.location.reload();
	}
}
