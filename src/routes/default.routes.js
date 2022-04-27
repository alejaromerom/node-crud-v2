const express = require('express');
const routes = express.Router();

const defaultController = require("../controller/default.controller");

routes.post("/create", defaultController.create);
routes.get("/list", defaultController.list);

module.exports = routes;