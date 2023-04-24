const { Router } = require("express");

const router = Router();

const api = require("./api");
const view = require("./view");

router.use("/", view);
router.use("/api", api);

module.exports = router;
