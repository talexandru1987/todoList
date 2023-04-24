const { Router } = require("express");

const items = require("./items");

const router = Router();

router.use("/", items);

module.exports = router;
