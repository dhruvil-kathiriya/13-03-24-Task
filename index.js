const express = require("express");
const app = express();

const port = 8000;

const db = require("./config/mongoose")

const session = require('express-session');
const passport = require('passport');
const passportlocal = require('./config/passport-local');

app.use(session({
    name: "LocalSession",
    secret: `Secret`,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 100
    }
}))

app.use(passport.initialize());
app.use(passport.session())

app.use(express.urlencoded({extended: true}))
app.use("/",require("./routes/userroutes"));

app.listen(port,(err)=>{
    err ? console.log(err):`Server is Working on Port : ${port}`;
})