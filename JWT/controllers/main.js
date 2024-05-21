const jwt = require("jsonwebtoken");
const { BadRequest } = require("../errors/index");

const login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    throw new BadRequest("Please provide email and password!");
  }

  const id = new Date().getDate();
  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  res.status(200).json({ token, username, password });
};

const dashboard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100);
  res.json({
    msg: `hello ${req.user.username}`,
    secret: `Your LUCKY NUMBER is ${luckyNumber}`,
  });
};

module.exports = {
  login,
  dashboard,
};
