const express = require("express");
const path = require("path");
const logger = require("morgan");
const http = require('http');
var favicon = require('serve-favicon')

const indexRouter = require("./routes/index");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "/public")));
app.use(favicon(path.join(__dirname, '/public', '/assets','/Logo-small.png')))

app.use("/", indexRouter);

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`App listening to ${PORT}....`)
    console.log('Press Ctrl+C to quit.')
})

module.exports = app;