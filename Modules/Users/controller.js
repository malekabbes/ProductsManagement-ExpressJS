"use strict";
const UserService = require("./service.js");
module.exports = {
  login: async (req, res) => {
    const { username, password } = req.body;
    try {
      const result = await UserService.login(username, password);
      res.status(200).send(result);
    } catch (error) {
      res.status(401).send({ message: error.message });
    }
  },
  get: async (req, res) => {
    const users = await UserService.get(req.query);
    res.send(users);
    res.status(200);
  },
  createuser: async (req, res) => {
    const { username, password } = req.body;
    try {
      const created = await UserService.createuser(username, password);
      res.status(200).send(created);
    } catch (err) {
      res.status(401).send({ message: err.message });
    }
  },
  // createform: async (req, res) => {
  //   try {
  //     res.render("manage-contact.twig", { title: "Add Contact" });
  //   } catch (e) {
  //     res.status(400);
  //     throw e;
  //   }
  // },
};
