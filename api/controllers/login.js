const client = require("../db/client");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  const { user_name, password } = req.body;
  console.log(req.body);
  try {
    const user = await client.query(
      `SELECT * FROM users WHERE user_name = '${user_name}'`
    );
   
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
     const isMatch = await bcrypt.compare(password, user.rows[0].password);
     
    if (isMatch) {
      const token = jwt.sign({ id: user.rows[0].id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_LIFETIME,
      });
        // console.log('user from login.js',user.rows[0]);
      // res.cookie('auth', token, { maxAge: 900000, httpOnly: true })
      // res.cookie('user', user.rows[0].admin, { maxAge: 900000, httpOnly: true })
      
      res.status(200).json({
        token,
        user: {
          id: user.rows[0].id,
          user_name: user.rows[0].user_name,
          admin: user.rows[0].admin,
        },
      });
    } else {
        res.status(400).json({ message: "Invalid credentials" });

    }
    // res.status(200).res.json({ message: "success" });
  } catch (err) {
    res.status(500).send(err);
  }
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
    console.log({ user_name, admin });
    res.status(200).send({ user_name, admin });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

module.exports = { login, register };
