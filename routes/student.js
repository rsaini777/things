const express = require("express");
const router = express.Router();
const controller = require("../controller/student");
router.post("/data", controller.data);
router.get("/data", controller.getdata);
router.put("data", controller.updatedata);

module.exports = router;
