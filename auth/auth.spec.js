const request = require("supertest");
const server = require("../api/server");
const db = require("../data/dbconfig");

describe("auth testing", () => {
  describe("POST REGISTER /auth/register ", () => {
    beforeEach(async () => {
      await db("users").truncate();
    });

    it("should return status 200", async () => {
      const res = await request(server)
        .post("/api/auth/register")
        .send({ email: "testemail@testing.com", password: "testing" });

      expect(res.status).toBe(200);
    });

    it("should return JSON object", async () => {
      const res = await request(server)
        .post("/api/auth/register")
        .send({ email: "testemail@testing.com", password: "testing" });

      expect(res.type).toMatch(/json/i);
    });
  });

  describe("POST LOGIN /auth/login", () => {
    describe("login to existing user", () => {
      it("should return status 200", async () => {
        const res = await request(server)
          .post("/api/auth/login")
          .send({ email: "testemail@testing.com", password: "testing" });

        expect(res.status).toBe(200);
      });

      it("should return json object", async () => {
        return request(server)
          .post("/api/auth/login")
          .send({ email: "testemail@testing.com", password: "testing" });

        expect(res.type).toMatch(/json/i);
      });

      it("should send a token", async () => {
        const res = await request(server)
          .post("/api/auth/login")
          .send({ email: "testemail@testing.com", password: "testing" });

        expect(res.body).toHaveProperty("token");
      });
    });
  });
});
