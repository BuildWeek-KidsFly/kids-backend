const request = require("supertest");
const server = require("./server");

describe("server", () => {
  describe("GET /", () => {
    it("should return 200 OK", async () => {
      await request(server)
        .get("/")
        .then(res => expect(res.status).toBe(200));
    });
  });
});
