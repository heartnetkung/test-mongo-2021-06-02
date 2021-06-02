//callback
//promise
//async await

// setTimeout(() => {
// 	console.log("aa");
// }, 1000);

const setTimeoutPromise = () => {
	//nothing
	return new Promise((res, rej) => {
		setTimeout(res, 1000);
	});
};

// setTimeoutPromise().then(() => {
// 	console.log("bb");
// });

// const run = async () => {
// 	await setTimeoutPromise();
// 	console.log("cc");
// };
