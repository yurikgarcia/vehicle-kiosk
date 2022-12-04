const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  //check header

 
    const authHeader = req.cookies.auth;
    console.log("auth header.. auth middleware", authHeader);
    try {
      if (!authHeader) {
        return res.status(401).json({ message: "No token, authorization denied" });
      }

      const token = jwt.verify(authHeader, process.env.JWT_SECRET);
      console.log("token from auth middleware", token);
      req.user = token.id;

      
      next();
    } catch (err) {
      res.status(401).json({ message: "Invalid token" });
    }
  // }
  // token = authHeader.split(" ")[1];
  // console.log("token from auth middleware", token);
  // if (!authHeader || !authHeader.startsWith("auth")) {
  //   res.status(401).json({ msg: "No token, authorization denied" });
  // }

  // try {
  //   const payload = jwt.verify(authHeader, process.env.JWT_SECRET);
  //   console.log("payload from auth middleware", payload);
  //   req.user = payload.user;
  //   console.log("working on auth");
  //   next();
  // } catch (err) {
  //   // res.status(401).json({ msg: "Token is not valid" });
  //   console.log(err);
  // }
};

module.exports = auth;
