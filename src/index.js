// app imports
require("dotenv").config();
const express = require("express");
const routes = require("./routes");
const mongoose = require("mongoose");

//global variables
const app = express();
const PORT = process.env.PORT || 4000;
const password = process.env.Password;
const database = process.env.DB;

//app settings
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(routes);

const init = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://Sunblade:${password}@testanddevelopment.onzeeyb.mongodb.net/${database}`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    console.log("[INFO]: Database connection successful");

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(`[ERROR]: Database connection failed | ${error.message}`);
  }
};

// app.get("/", (req, res) => {
//   res.render("list", { listTitle: getDate(), listItemes: ["Food"] });
// });

// app.post("/", (req, res) => {
//   if (req.body.list === "Work") {
//     workItems.push(req.body.todoItem);

//     res.redirect("/work");
//   } else {
//     userInput.push(req.body.todoItem);
//     res.redirect("/");
//   }
// });

// app.get("/work", (req, res) => {
//   res.render("list", { listTitle: "Work List", listItemes: workItems });
// });

// app.post("/work", (req, res) => {
//   let item = req.body.todoItem;
//   workItems.push(item);
//   res.redirect("/work");
// });

// app.get("/about", (req, res) => {
//   res.render("about");
// });

init();
