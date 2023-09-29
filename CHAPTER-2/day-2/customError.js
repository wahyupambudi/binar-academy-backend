class CustomError extends Error{
	constructor(message) {
		super(message)
		this.name = "CustomError"
	}
}


try {
	throw new Error("Ini contoh error custom")
} catch(error) {
	if(error instanceof CustomError) {
		console.log("Menangkap CustomError:", error.message)
	} else {
		console.error("Menangkap Error: ", error.message);
	}
}