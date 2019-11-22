const jwt = require("jsonwebtoken");

module.exports = {
  authMiddleware,
  verifyRegister,
  checkRole,
  checkLoginCreds
};

function authMiddleware(req, res, next) {
  const token = req.headers.authorization;
  const secret = process.env.JWT_SECRET || "rapper viper";

  if (token) {
    jwt.verify(token, secret, (error, decoded) => {
      if (error) {
        res
          .status(401)
          .json({ message: "not authorized to view this content" });
      } else {
        req.decodedJwt = decoded;
        next();
      }
    });
  }
}

function checkRole(req, res, next) {
  const token = req.headers.authorization;
  const secret = process.env.JWT_SECRET || "rapper viper";

  if (token) {
    jwt.verify(token, secret, (error, decoded) => {
      if (error) {
        res.status(403).json({ message: "not authorized" });
      } else {
        req.decodedJwt = decoded;
        decoded.role === "admin"
          ? next()
          : res
              .status(403)
              .json({ message: "must be an admin to access this content" });
      }
    });
  }
}

function verifyRegister(req, res, next) {
  const user = req.body;
  !user.password || !user.email
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
