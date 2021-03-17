const express = require('express');
const router = express.Router();
// const spamm = require("./middleware/spamm");
const messageController = require("../controllers/message");

router.post("/", messageController.store);

router.get('/:id', messageController.getOne);

module.exports = router;

// routes van de messages