var axios = require("axios");
var cheerio = require("cheerio");
var express = require("express");
var handlebars = require("express-handlebars");
// var mongo = require("mongojs");
var mongoose = require("mongoose");

let db = require("./models")

// app.engine("handlebars", handlebars({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");

// var databaseurl = ("wonderfuldb");
// var collections = ["scraped"];

var app = express();
var port = process.env.port || 3001;
// var db = mongo(databaseurl, collections);
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/wonderfuldb";

mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.json());

// db.on("error", function (error) {
//     console.log("Database Error:", error);
// });

const reddit = "https://www.reddit.com";

app.get("/", function (req, res) {
    axios.get(reddit + "/r/ChoosingBeggars/").then(function (response) {
        var $ = cheerio.load(response.data);
        var results = [];
        var iReallyFuckingHateDatabases = [];
        $("div.Post").each(function (i, element) {
            let title = $(element).children().find("h3").text();
            let postId = $(element).attr("id");
            let link = $(element).find("div." + postId).children().find("a").attr("href");
            result = {
                title: title,
                link: link,
                rId: postId
            }
            results.push(result);
        })
        console.log(results + "\n--------------------------------");
        db.article.find({}, (err, done) => {
            if (err) throw err;
            for (let q = 0; q < done.length; q++) {
                iReallyFuckingHateDatabases.push(done[q]);
                // const articleExists = done.find(art => art.title === results[q].title);
                // if (!articleExists) db.article.create(results[q], (err, data) => {if (err) throw err;
                //     console.log(data)
                //     // db.article.insertMany(results, function () {

                //     // }
                // });
            };
        });
        // db.article.find({ rId: result.rId }, function (err, data) {
        //     if (err) throw err;
        //     console.log(data);
        //     if (data == undefined) {
        //         db.article.create(result).then(function (dbArticle) {
        //             console.log(dbArticle);
        //         }).catch(function (err) {
        //             console.log(err);
        //         });
        //     };
        // });
        res.json(done)
    });
});

// app.get("/all", function (req, res) {
//     res.send()
// })

app.listen(port, () => console.log("port " + port));