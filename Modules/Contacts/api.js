const express = require("express");
const router = express.Router();
const ContactController = require("./controller");

router
  .get("/contact", ContactController.get)
  .get("/contact/add", ContactController.createform)
  .post("/contact/add-contact", ContactController.createcontact)
  .get("/contact/edit/:id", ContactController.updateform)
  .post("/contact/edit/:id", ContactController.update)
  .post("/contact/delete/:id", ContactController.delete);
module.exports = router;
