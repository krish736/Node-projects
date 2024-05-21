const login = async (req, res) => {
  res.send("sing up");
};

const dashboard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100);
  res.json(`Your LUCKY NUMBER is ${luckyNumber}`);
};

module.exports = {
  login,
  dashboard,
};
