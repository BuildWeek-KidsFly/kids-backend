const jwt = require("jsonwebtoken");

module.exports = {
  getJwtToken
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
