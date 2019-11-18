const jwt = require("jsonwebtoken");

module.exports = {
  authMiddleware,
  verifyRegister,
  checkLoginCreds
};

function authMiddleware(req, res, next) {
  const token = req.headers.authorization;
  const secret = process.env.JWT_SECRET || "rapper viper";

  if (token) {
    jwt.verify(token, secret, (error, decodeToken) => {
      error
        ? res
            .status(401)
            .json({ message: "not authorized to view this content" })
        : next();
    });
  }
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
