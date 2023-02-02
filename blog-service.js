const fs = require("fs");

let posts = [];
let categories = [];

const initialize = () => {
  return new Promise((resolve, reject) => {
    fs.readFile("./data/posts.json", "utf8", (err, data) => {
      if (err) return reject("unable to read posts file");

      posts = JSON.parse(data);

      fs.readFile("./data/categories.json", "utf8", (err, data) => {
        if (err) return reject("unable to read categories file");

        categories = JSON.parse(data);
        resolve();
      });
    });
  });
};

const getAllPosts = () => {
  return new Promise((resolve, reject) => {
    if (!posts.length) return reject("no posts found");

    resolve(posts);
  });
};

const getPublishedPosts = () => {
  return new Promise((resolve, reject) => {
    const publishedPosts = posts.filter((post) => post.published);

    if (!publishedPosts.length) return reject("no published posts found");

    resolve(publishedPosts);
  });
};

const getCategories = () => {
  return new Promise((resolve, reject) => {
    if (!categories.length) return reject("no categories found");

    resolve(categories);
  });
};

module.exports = { initialize, getAllPosts, getPublishedPosts, getCategories };

const blogService = require('./blog-service');
blogService.initialize()
  .then(() => {
    // Start the server if the initialize method resolves successfully
    app.listen(port, () => {
      console.log(`Server started at http://localhost:${port}`);
    });
  })
  .catch((error) => {
    // Output a meaningful error message to the console if the initialize method rejects
    console.error(`Error: ${error}`);
  });
