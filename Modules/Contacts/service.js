"use strict";

const Contact = require("./model");
module.exports = {
  get: async (query) => {
    try {
      let dbQuery = Contact;
      if (query.id !== undefined && query.id !== "") {
        dbQuery = dbQuery.findById(query.id);
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
  create: async (newContact) => {
    try {
      return await Contact.create(newContact);
    } catch (error) {
      console.error(error);
    }
  },
  update: async (id, updatedcontact) => {
    try {
      return await Contact.findByIdAndUpdate(id, updatedcontact);
    } catch (error) {
      console.error(error);
    }
  },
  delete: async (id) => {
    try {
      return await Contact.findOneAndRemove(id);
    } catch (error) {
      console.error(error);
    }
  },
};
