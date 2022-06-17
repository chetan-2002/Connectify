const { validationResult } = require("express-validator");
const Post = require("../models/post");

exports.getPosts = (req, res, next) => {
  Post.find()
    .then((posts) => {
      res.status(200).json({
        message: "Posts fetched successfully!",
        posts: posts,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.createPost = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({
      message: "Invalid Input Data",
      errors: errors.array(),
    });
  }

  //uncomment this code when frontend would be ready
  // if (!req.file) {
  //   return res.status(422).json({
  //     message: "No image provided",
  //   });
  // }
  // const imageUrl = req.file.path;

  const title = req.body.title;
  const content = req.body.content;
  const post = new Post({
    title: title,
    imageUrl: "images/duck.jpg",
    content: content,
    creator: { name: "John" },
  });

  post
    .save()
    .then((result) => {
      res.status(201).json({
        message: "Post Created!",
        post: result,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getPost = (req, res, next) => {
  const postId = req.params.postId;
  Post.findById(postId)
    .then((post) => {
      if (post) {
        res.status(200).json({ post: post, message: "Post found!" });
      } else {
        res.status(404).json({ message: "Post not found!" });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
