const client = require("../db/client");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  const { username, password } = req.body;
  const user = await client.user.findFirst({
    where: {
      username,
      password,
    },
  });
  if (!user) {
    return res.status(400).json({ message: "Invalid username or password" });
  }
  res.json({ message: "success" });
};

const register = async (req, res) => {
    if (req.body.admin === undefined) {
        req.body.admin = false;
    }
    const password = await bcrypt.hash(req.body.password, 10);
    const { user_name, admin } = req.body;
  console.log(password);
  try {
    if (!user_name || !password) {
      return res.status(400).json({ message: "Please enter all fields" });
    }

    const user = await client.query(
      `INSERT INTO users (user_name, password, admin) VALUES ('${user_name}', '${password}', '${admin}')`
    );
        console.log({user_name, admin})
    res.status(200).send({user_name, admin});
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

module.exports = { login, register };
