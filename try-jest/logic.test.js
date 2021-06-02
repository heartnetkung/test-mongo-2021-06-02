const { add } = require("./logic");

describe("logic.js", () => {
	describe("add(a,b)", () => {
		it("basic case", () => {
			expect(add(1, 2)).toBe(3);
		});
		it("error if inputs are string", () => {
			try {
				add("1", 2);
				fail();
			} catch (e) {}
		});
	});
});

const setTimeoutPromise = () => {
	//nothing
	return new Promise((res, rej) => {
		setTimeout(res, 1000);
	});
};

beforeAll(async () => {
	console.log("b1");
	await setTimeoutPromise();
	console.log("b2");
});

afterAll(async () => {
	console.log("a1");
	await setTimeoutPromise();
	console.log("a2");
});