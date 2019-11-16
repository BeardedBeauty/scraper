// const db = require("../models");

module.exports = app => {
    app.get("/", (req, res) => {
        res.render("index", {
            msg: "dr"
        });
    });
    app.get("/comments", (req, res) => {
        res.render("comments", {
            msg: "comment"
        });
    });
};