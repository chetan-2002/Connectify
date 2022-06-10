exports.getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [
      {
        _id: "1",
        title: "First Post",
        content: "This is the first post's content",
        imageUrl: "images/duck.jpg",
        creator: {
          name: "John",
        },
        createdAt: new Date(),
      },
      {
        _id: "2",
        title: "Second Post",
        content: "This is the second post's content",
        imageUrl: "images/duck.jpg",
        creator: {
          name: "John",
        },
        createdAt: new Date(),
      },
    ],
  });
};

exports.createPost = (req, res, next) => {
  const title = req.body.title;
  const content = req.body.content;

  res.status(201).json({
    message: "Post Created!",
    post: {
      _id: new Date().toISOString(),
      title: title,
      content: content,
    },
  });
};
