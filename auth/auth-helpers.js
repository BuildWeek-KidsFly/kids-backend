const jwt = require("jsonwebtoken");
const db = require("../data/dbconfig");

module.exports = {
  getJwtToken,
  checkExisting
};

function getJwtToken(id) {
  const payload = {
    id
  };
  const secret = process.env.JWT_SECRET || "rapper viper";
  const options = {
    expiresIn: "1d"
  };

  return jwt.sign(payload, secret, options);
}

function checkExisting(req, res, next) {
  const findEmail = email => {
    return db("users")
      .where({ email })
      .first();
  };
}
