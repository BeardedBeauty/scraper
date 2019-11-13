const reddit = "https://www.reddit.com";
$(document).ready(function() {
    console.log(reddit);
})

$(document).on("click", ".neato", () => {
    let w = ["", "", ""];
    $.get("/scrape", data => {
        console.log(data)
        // for (let q = 0; q < data.length; q++) {
        //     w[0] = data[q].title;
        //     w[1] = reddit + data[q].link;
        //     console.log(w);
        // }
    });
});