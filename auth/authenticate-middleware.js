const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
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
};
