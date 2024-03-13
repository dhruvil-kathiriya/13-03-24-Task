const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1/user_DB");

const db = mongoose.connection;

db.once("open",(err)=>{
    err?console.log(err): `Database Connected Successfully !`;
})

module.exports = db;