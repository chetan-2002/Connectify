const express = require("express");
const feedController = require("../controllers/feed");
const { body } = require("express-validator");

const router = express.Router();
router.get("/posts", feedController.getPosts); // getPosts is a function

router.post(
  "/post",
  [
    body("title").trim().isLength({ min: 5 }),
    body("content").trim().isLength({ min: 5 }),
  ],
  feedController.createPost
);

router.get("/post/:postId", feedController.getPost);
module.exports = router;
