const { Router } = require("express");

const { createListItem } = require("../../controllers/api/listItem");

const router = Router();

router.post("/", createListItem);

module.exports = router;
