const db = require("../models");
const axios = require("axios");
const cheerio = require("cheerio");
const reddit = "https://www.reddit.com";

module.exports = app => {
    app.get("/scrape", (req, res) => {
        axios.get(reddit + "/r/ChoosingBeggars/").then(response => {
            var $ = cheerio.load(response.data);
            var results = [];
            var stupid = [];
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
            });
            db.article.find({}, (err, data) => {
                if (err) throw err;
                stupid = data;
                var w = 0;
                for (let q = 0; q < results.length; q++) {
                    const articleExists = stupid.find(art => art.rId === results[q].rId);
                    if (!articleExists) db.article.create(results[q], (err, data) => {
                        if (err) throw err;
                        console.log(data);
                        w++;
                    })
                };
                console.log("--------------" + w + " new items inserted--------------")
            }).then(db.article.find({}, (err, data) => {
                if (err) throw err;
                res.json(data);
            })
            );
        });
    });
};