const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contactController");
// getting all contacts
router.get("/contacts", contactController.getAllContacts);

//  add a contact
router.post("/contact", contactController.addContact);

// delete a contact
router.delete("/contact/:id", contactController.deleteContact);

module.exports = router;
