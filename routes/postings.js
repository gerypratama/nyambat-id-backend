const express = require("express");
const postingsController = require("../controllers/postingsController");

const router = express.Router();

router.route("/").get(postingsController.getAllPostings);

module.exports = router;
