const mongoose = require("mongoose");

const connectDB = async () => {
	try {
		await mongoose.connect(
			"mongodb+srv://xx:yy@cluster0.zcg9x.mongodb.net/intern?retryWrites=true&w=majority",
			{
				useNewUrlParser: true,
				useCreateIndex: true,
				useFindAndModify: false,
				useUnifiedTopology: true,
				autoIndex: false,
			}
		);
	} catch (err) {
		throw new Error(err);
	}
};

const disconnectDB = async () => {
	try {
		await mongoose.disconnect();
	} catch (err) {
		throw new Error(err);
	}
};

module.exports = { connectDB, disconnectDB };
