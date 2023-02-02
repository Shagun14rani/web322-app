const express = require("express");
const app = express();


// setup the static folder that static resources can load from
// like images, css files, etc.
app.use(express.static("public"));


// setup a route on the 'root' of the url
// IE: http://localhost:8080/
app.get("/", (req, res) => {
    res.redirect("/about");
  });
  

  // now add a route for the /headers page
  // IE: http://localhost:8080/headers
  app.get("/about", (req, res) => {
    res.sendFile(`${__dirname}/views/about.html`);
  });

  
  // Listen on process.env.PORT or 8080
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Express http server listening on ${port}`);
});


app.get('/blog', (req, res) => {
  res.send('TODO: get all posts who have published==true');
});

app.get('/users', (req, res) => {
  res.send('TODO: get all users');
});

app.get('/products', (req, res) => {
  res.send('TODO: get all products');
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});



const fs = require('fs');

// Load data from JSON files
const posts = JSON.parse(fs.readFileSync('./posts.json', 'utf-8'));
const categories = JSON.parse(fs.readFileSync('./categories.json', 'utf-8'));

// Route for /blog
app.get('/blog', (req, res) => {
  // Filter posts with published property set to true
  const publishedPosts = posts.filter(post => post.published === true);
  // Return the filtered posts as a JSON formatted string
  res.json(publishedPosts);
});

// Route for /posts
app.get('/posts', (req, res) => {
  // Return all posts as a JSON formatted string
  res.json(posts);
});

// Route for /categories
app.get('/categories', (req, res) => {
  // Return all categories as a JSON formatted string
  res.json(categories);
});

// Route for 404 error
app.use((req, res) => {
  // Return a "Page Not Found" message with HTTP status code 404
  res.status(404).send("Page Not Found");
});

// Start the server
app.listen(8080, () => {
  console.log('Server running on http://localhost:8080');
});


app.get('/categories', (req, res) => {
    blogService.getCategories()
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        res.json({message: err});
      });
  });

  app.get('/posts', (req, res) => {
    blogService.getPosts()
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        res.json({message: err});
      });
  });
  app.get('/blog', (req, res) => {
    blogService.getBlog()
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        res.json({message: err});
      });
  });
    