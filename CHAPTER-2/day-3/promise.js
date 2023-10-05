// // promise bakal selalu berjalan asynchronous aja, tapi callback bisa dipakai buat synchronous maupun asynchronous process

// const myPromise = new Promise((resolve) => resolve("Hello World"));
// // karena tidak ada reject, maka tidak perlu menulis catch
// myPromise.then((resolve) => {
// 	console.log("Hello World");
// });

// function isPasswordCorrect(password) {
// 	return new Promise((resolve, reject) => {
// 		console.log("Password: ", password);
// 		if (password !== "123456") return reject("Wrong Password!");

// 		resolve("Password Is Correct!");
// 	});
// }

// // outputnya akan resolve: Password is Correct!
// isPasswordCorrect("123456")
// 	.then((resolve) => console.log(resolve))
// 	.catch((reject) => console.error(reject));

// // output nya akan reject : Wrong Password
// isPasswordCorrect("123455")
// 	.then((resolve) => console.log(resolve))
// 	.catch((reject) => console.error(reject));



// WHEN MEETING ZOOM
function checkKTP(input) {
	return new Promise((resolve, reject) => {
		if(input.length == 16) {
			resolve("success")
		} else {
			reject(new Error("Not Correct"))
		}
	})
}

checkKTP('111111111211111111')
	.then(resp => {
		console.log(`check resp ${resp}`)
	})
	.catch(err => {
		console.error(err)
	})