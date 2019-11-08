const path = require("path");

const express = require("express");
const request = require("request");

const app = express();
const publicDirectoryPath = path.join(__dirname, "../public");

// Default 'views' folder, renamed it to 'templates' folder 
const viewPath = path.join(__dirname,"../templates");

// Set the key value of 'template' folder
app.set("views", viewPath);

// Set the key value
app.set("view engine", "hbs");

// Home Page
app.get("", (req, resp) => {
  resp.render("index", {
    title: "Weather - Home Page",
    name: "vzan2012"
  });
});

// About Page
app.get("/about", (req, resp) => {
  resp.render("about", {
    title: "About Page",
    name: "vzan2012"
  });
});

// Help Page
app.get("/help", (req, resp) => {
  resp.render("help", {
    title: "Help Page",
    helpText: "This is some helpful text."
  });
  // console.log("Viewing the Help Page");
});

// Enable the folder as the root in the server
app.use(express.static(publicDirectoryPath));

app.get("/weather", (req, resp) => {
  resp.send({
    forecast: "It is raining...",
    location: "Paris"
  });
});

// Display the Directory Path
// console.log(__dirname);

// Join the FilePath
// console.log(path.join(__dirname, '../'));

// Display the Current File Path
// console.log(__filename);
// console.log(path);

app.listen(3000, () => console.log("Server is running in port 3000"));
