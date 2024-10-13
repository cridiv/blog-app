import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req,res) => {
    res.render("index.ejs");
});

app.get("/post", (req, res) => {
    res.render("post.ejs");
  });


  let posts = [];

app.post("/submit", (req, res) => {
    const newPost = {
     title: req.body.title,
     content: req.body.content
};


posts.push(newPost);

res.redirect('/');

});

app.get("/blog", (req, res) => {
    res.render("partials/blog.ejs", {posts: posts});
});

app.get("/blog", (req, res) => {
    res.render("partials/blog.ejs");
});

app.get("/about", (req, res) => {
    res.render("partials/about.ejs");
});

app.get("/contact", (req, res) => {
    res.render("partials/contact.ejs");
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });