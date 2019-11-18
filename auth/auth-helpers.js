const jwt = require("jsonwebtoken");

module.exports = {
  getJwtToken,
  verifyRegister,
  checkLoginCreds
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

function verifyRegister(req, res, next) {
  const user = req.body;
  !user.password || !user.email || !user.home_airport
    ? res.status(400).json({
        error: "Please include a username, password, and home airport"
      })
    : next();
}

function checkLoginCreds(req, res, next) {
  const user = req.body;
  !user.password || !user.email
    ? res.status(400).json({
        error: "Please include a username and password"
      })
    : next();
}
