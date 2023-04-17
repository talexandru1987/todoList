const express = require("express");

const app = express();

const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs");

let userInput = [];

app.get("/", (req, res) => {
  const date = new Date();

  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  const day = date.toLocaleDateString("en-us", options);

  res.render("list", { someDay: day, newItem: userInput });
});

app.post("/", (req, res) => {
  userInput.push(req.body.todoItem);
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`App listening on port: ${port}`);
});
