const User = require("../model/usermodel");
const jwt = require("jsonwebtoken");
module.exports.register = async (req, res) => {
  try {
    const checkmail = await User.findOne({ email: req.body.email });
    if (checkmail) {
      req.status(400).json({ msg: "User already exists", status: 0 });
    } else {
      let userRecord = await User.create(req.body);
      res.status(200).json({
        msg: "User Registered Successfully",
        status: 1,
        Data: userRecord,
      });
    }
  } catch (err) {
    res.status(400).json({ msg: "Something went wrong", status: 0 });
  }
};

module.exports.login = async (req, res) => {
  try {
    const userdata = await User.findOne({ email: req.body.email });
    if (userdata) {
      if (
        userdata.email == req.body.email &&
        userdata.password == req.body.password
      ) {
        const token = jwt.sign(
          { email: req.body.email, password: req.body.password },
          "Usersecret"
        );
        res.status(200).json({
          msg: "User Loggedin Successfully",
          status: 1,
          data: userdata,
          token: token,
        });
      } else {
        res.status(400).json({
          msg: "Password Does not Match",
          status: 0,
        });
      }
    } else {
    }
  } catch (err) {
    res.status(400).json({ msg: "Something went wrong", status: 0 });
  }
};
