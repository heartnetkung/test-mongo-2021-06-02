const { connectDB, disconnectDB } = require("./dbutil");
const User = require("./schema/User");

console.stringify = (data) => console.log(JSON.stringify(data, null, 2));

const command = async () => {
	// var ans = await User.find();
	// console.stringify(ans);
	var ans = await User.find({ password: "keng" }).explain();
	// console.stringify(ans);
	// var ans = await User.insertMany([
	// 	{ username: "keng", password: "keng", login_count: 0, tag: ["intern"] },
	// ]);
	// var ans = await User.find({ login_count: { $gt: 0 } });
	console.stringify(ans);
};

const main = async () => {
	try {
		await connectDB();
		await command();
		await disconnectDB();
	} catch (e) {
		console.error(e);
	}
};

main();
