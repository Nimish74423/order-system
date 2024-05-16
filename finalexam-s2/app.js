// Import packages
require("dotenv").config();
const express = require("express");
const path = require("path");
const session = require("express-session");
const mongoose = require("mongoose");

const appRouter = require("./routes/appRouter");

// Connect to database
const uri = process.env.MONGODB_CONNECTION_STRING;
mongoose.connect(uri)
    .then(() => { console.log("Connected to database!"); })
    .catch((error) => { console.log(error.message); });

// Create an app
const app = express();
const port = 6771;

// Setup static folder, body parser, session, view engine
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: false}));
app.use(session({ secret: "PROG1935-24W-S1", resave: false, saveUninitialized: true }));
app.set("view engine", "ejs");

// Routes
app.use("/", appRouter);

// Run the app
app.listen(port, () => {
    console.log(`App http://localhost:${port}`);
});
