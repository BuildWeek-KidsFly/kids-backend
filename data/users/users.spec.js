const request = require("supertest");
const server = require("../../api/server");
const db = require("../dbconfig");
const Users = require("./users-model");

describe("users", () => {
  describe("GET /", () => {
    beforeEach(async () => {
      await db("users");
    });

    it("should return list of users", async () => {
      const insert = await Users.add({
        email: "thisisanemail@email.com",
        password: "thisisapassword"
      });
      const res = await Users.getUsers();

      expect(res).not.toHaveLength(0);
    });

    it("should return a user based on id", async () => {
      const res = await Users.getUserById(1);
      expect(res.email).toBe("thisisanemail@email.com");
    });

    it("should return a list of trips", async () => {
      const res = await Users.getTrips(1);

      expect(res).not.toHaveLength(0);
    });
  });
});
