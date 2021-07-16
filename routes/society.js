const express = require("express");
const router = express.Router();
const controller = require("../controller/society");
router.post("/society", controller.society);
router.get("/society", controller.getData);

module.exports = router;
