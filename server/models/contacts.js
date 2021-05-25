const mongoose = require("mongoose");
const contactSchema = mongoose.Schema({
  firstName: {
    type: "string",
    required: true,
  },
  lastName: {
    type: "string",
    required: true,
  },
  phoneNumber: {
    type: "number",
    required: true,
  },
});
const contact = (module.exports = mongoose.model("contact", contactSchema));
