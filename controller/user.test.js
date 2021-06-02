const controller = require("./user");
const req = require("supertest");
const express = require("express");
const bodyParser = require("body-parser");

const prepare = () => req(express().use(bodyParser.json()).use(controller));

describe("/user", () => {
	describe("GET /user/echo/:username", () => {
		it("basic case", async () => {
			var res = await prepare().get("/echo/mack");
			expect(res.status).toBe(200);
			expect(res.body).toEqual({ query: {}, username: "mack" });
		});
		it("400 invalid user case", () => {});
	});
	describe("GET /user/all_user", () => {
		it("basic case", () => {});
	});
	describe("POST /user/add", () => {
		it("basic case", async () => {
			var res = await prepare().post("/add").send({ a: 3, b: 4 });
			expect(res.status).toBe(200);
			expect(res.body).toEqual({ result: 7 });
		});
		it("400 'input must be number'", async () => {
			var res = await prepare().post("/add").send({ a: "3", b: 4 });
			expect(res.status).toBe(400);
			expect(res.body.error).toBe("input must be number");
		});
	});
});
