const Passport = require("passport");

const User = require("../model/usermodel");

var JwtStrategy = require("passport-jwt").Strategy;
var ExtractJwt = require("passport-jwt").ExtractJwt;
var opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: "Usersecret",
};
Passport.use(
  "verifyUser",
  new JwtStrategy(opts, async (record, done) => {
    let data = await User.findById(record.userData._id);
    data ? done(null, data) : done(null, false);
  })
);

Passport.serializeUser((user, done) => {
  return done(null, user.id);
});

Passport.deserializeUser(async (id, done) => {
  let reCheck = await User.findById(id);
  reCheck ? done(null, reCheck) : done(null, false);
});


module.exports = Passport;
