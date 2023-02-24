const express = require("express");
const router = express.Router();
const UserController = require("./controller");

router
  .get("/users", UserController.get)
  .post("/users/create", UserController.createuser)
  .post("/users/login", UserController.login);
// .post("/contact/edit/:id", ContactController.update)
// .post("/contact/delete/:id", ContactController.delete);
module.exports = router;
