"use strict";
const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema(
  {
    FullName: {
      type: String,
      required: false,
    },
    Phone: {
      type: Number,
      required: false,
    },
  },
  { timestamps: true }
);

const contact = mongoose.model("Contact", ContactSchema);
module.exports = contact;
