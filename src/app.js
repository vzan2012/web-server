const path = require("path");

const express = require("express");
const request = require("request");

const hbs = require("hbs");

const app = express();

// Define the path for the Express config
const publicDirectoryPath = path.join(__dirname, "../public");

// Default 'views' folder, renamed it to 'templates' folder
const viewPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// Setup Handlebars and view location
// Set the key value of 'template' folder
app.set("views", viewPath);

// Set the key value
app.set("view engine", "hbs");

hbs.registerPartials(partialsPath);

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
    name: "vzan2012",
    helpText: "This is some helpful text."
  });
  // console.log("Viewing the Help Page");
});

// Setup static directory to serve
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

app.get("/help/*", (req, resp) => {
  // resp.send("Help Page not found");
  resp.render("404", {
    title: '404',
    name: 'vzan2012',    
    errorMessage: "Help article not found"
  });
});

// My 404 Page
app.get("*", (req, resp) => {
  // resp.send("My 404 Page");
  resp.render("404", {
    title: '404',
    name: 'vzan2012',
    errorMessage: "Page Not Found"
  });
});

app.listen(3000, () => console.log("Server is running in port 3000"));
