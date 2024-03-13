const express = require("express");
const routes = express.Router();
const usercontroller = require("../controller/usercontroleer");
const passport = require("../config/passport-local");

routes.post("/register",usercontroller.register);

routes.post("/login", usercontroller.login);

routes.use(
  "/post",
  passport.authenticate('verifyUser'),
  require("../routes/postroute")
);

module.exports = routes;
