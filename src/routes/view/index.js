const { Router } = require("express");

const { getListItems } = require("../../controllers/view");

const router = Router();

router.get("/", getListItems);

module.exports = router;
