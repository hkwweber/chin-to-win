const { expect } = require("chai");
const request = require("supertest");
const { db, Celeb } = require("../../db/models");
const app = require("../../index");

describe("Celeb routes", () => {
	beforeEach(() => {
		return db.sync({ force: true });
	});

	describe("/api/celebs", () => {
		beforeEach(() => {
			return Celeb.create({
				name: "Jennifer Lopez",
				fullPhoto: "https://i.imgur.com/flewa1k.jpg",
				chinCropPhoto: "https://i.imgur.com/FBbk0RC.jpg"
			}).then(celebrity => {
				jenniferLopez = celebrity;
			});
		});

		it("GET /api/celebs", () => {
			return request(app)
				.get("/api/celebs")
				.expect(200)
				.then(res => {
					expect(res.body).to.be.an("array");
					expect(res.body[0].name).to.be.equal("Jennifer Lopez");
				});
		});

		it("GET /api/celebs/:celebID", () => {
			return request(app)
				.get("/api/celebs/1")
				.expect(200)
				.then(res => {
					expect(res.body).to.be.an("object");
					expect(res.body.name).to.be.equal("Jennifer Lopez");
				});
		});
	});
});
