const express = require("express");
const feedController = require("../controllers/feed");

const router = express.Router();
router.get("/post", feedController.getPosts); // getPosts is a function

router.post("/post", feedController.createPost);

module.exports = router;
