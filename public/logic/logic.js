// $(document).ready(() => {

// })
const reddit = "https://www.reddit.com";

$(document).on("click", "/scrape", (event) => {
    event.preventDefault();
    let w = ["", "", ""];
    $.get("/scrape", data => {
        for (let q = 0; q < data.length; q++) {
            w[0] = data[q].title;
            w[1] = reddit + data[q].link;
            console.log(w);
        }
    });
});