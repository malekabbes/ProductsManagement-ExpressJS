"use strict";
const bcrypt = require("bcrypt");
const User = require("./model");
module.exports = {
  get: async (query) => {
    try {
      let dbQuery = User;
      if (query.id !== undefined && query.id !== "") {
        dbQuery = dbQuery.findById(query.username);
      } else {
        dbQuery = dbQuery.find();
      }
      return {
        data: await dbQuery.exec(),
      };
    } catch (e) {
      throw e;
    }
  },
  createuser: async (username, password) => {
    try {
      const salt = 10;
      const hashed_password = await bcrypt.hash(password, salt);
      await User.create({ username, password: hashed_password });
      return "User Created";
    } catch (error) {
      console.error(error);
    }
  },
  login: async (username, password) => {
    const user = await User.findOne({ username });
    if (!user) {
      console.log("MOCH MAWJOUD");

      throw new Error("User not found !");
    }
    console.log("EYY MAWJOUD");

    const password_match = await bcrypt.compare(password, user.password);
    if (!password_match) {
      throw new Error("Echec d'authentification");
    } else {
      return { message: "Welcome" };
    }
  },
  update: async (id, updated_user) => {
    try {
      const salt = 10;
      const hash = await bcrypt.hash(updated_user.password, salt);
      updated_user.password = hash;
      return await User.findByIdAndUpdate(id, updated_user);
    } catch (error) {
      console.error(error);
    }
  },
  delete: async (id) => {
    try {
      return await User.findOneAndRemove(id);
    } catch (error) {
      console.error(error);
    }
  },
};
