const express = require("express");
const router = express.Router();
const controller = require("../controller/subjects");
router.post("/subjects", controller.subjects);
router.get("/subjects", controller.getData);

module.exports = router;
