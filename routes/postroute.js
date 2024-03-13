const express = require("express");
const routes = express.Router();
const postcontroller = require("../controller/postcontroller");

routes.post("/create", postcontroller.create);

routes.get("/view", postcontroller.view);

routes.post("/delete", postcontroller.delete);

routes.post("/update", postcontroller.update);

module.exports = routes;
