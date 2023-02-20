"use strict";

const ContactService = require("./service.js");
module.exports = {
  update_form: false,

  get: async (req, res) => {
    const contacts = await ContactService.get(req.query);
    // console.log(contacts.data['FullName'];
    // console.log(contacts['FullName']);
    res.render("form.twig", { title: "Contact list", cont: contacts });
    res.status(200);
  },
  createform: async (req, res) => {
    try {
      res.render("manage-contact.twig", { title: "Add Contact" });
    } catch (e) {
      res.status(400);
      throw e;
    }
  },
  createcontact: async (req, res) => {
    try {
      const create_contact = req.body;
      console.log(create_contact);
      const new_contact = await ContactService.create(create_contact);
      res.status(200);
      console.log("Contact " + new_contact._id + " is Added successfully! ");
      res.set({ refresh: "2;url=/api/contact" });
      res.render("manage-contact.twig", {
        title: "Add Contact",
        message: "Contact " + new_contact._id + " is Added successfully!",
      });
    } catch (e) {
      res.status(400);
      throw e;
    }
  },
  updateform: async (req, res) => {
    const id = req.params.id;
    console.log(id);
    const u_contact = await ContactService.get({ id });
    console.log("trah", u_contact);
    try {
      res.render("manage-contact.twig", {
        title: "Update Contact",
        update_form: true,
        contact: u_contact.data,
        id: id,
      });
    } catch (e) {
      res.status(400);
      throw e;
    }
  },
  update: async (req, res) => {
    try {
      const id = req.params.id;
      const update_contact = req.body;
      const updated_contact = await ContactService.update(id, update_contact);
      console.log("hmm", updated_contact);
      res.status(200);
      res.set({ refresh: "2;url=/api/contact" });
      res.render("manage-contact.twig", {
        title: "Update Contact",
        update_form: true,
        id: req.params.id,
        message: "Contact " + updated_contact._id + " is Updated successfully!",
      });
    } catch (e) {
      throw e;
    }
  },
  delete: async (req, res) => {
    try {
      const id = req.params.id;
      const deleted_contact = await ContactService.delete(id);
      console.log("workingg", deleted_contact);
      res.status(200);
      res.render("form.twig", {
        message: "Contact " + deleted_contact._id + "is Deleted successfully!",
      });
    } catch (e) {
      throw e;
    }
  },
};
