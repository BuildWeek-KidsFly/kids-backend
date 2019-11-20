const db = require("../data/dbconfig");

const findByEmail = email => {
  return db("users")
    .where({ email })
    .first();
};

module.exports = (req, res, next) => {
  const userEmail = req.body.email;
  findByEmail(userEmail).then(email =>
    email === undefined
      ? next()
      : res.status(400).json({ error: "A user with that email already exists" })
  );
};
