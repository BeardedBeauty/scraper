const reddit = "https://www.reddit.com";

$(document).on("click", ".neato", () => {
    $.get("/scrape", data => {
        $(".go").remove();
        dump(data);
    });
});

$(document).on("click", ".neato", () => {
    $.get("/scrape", data => {
        $(".go").remove();
        dump(data);
    });
});
$(document).on("click", ".idLink", () => {
    $.get("/comments", data => {
    });
});

function dump(truck) {
    for (let q = 0; q < truck.length; q++) {
        let w = {
            title: "",
            link: "",
            id: ""
        };
        w.title = truck[q].title;
        w.link = reddit + truck[q].link;
        w.id = truck[q].rId
        // console.log(w);

        $(".row").after(
            '<div class="col s12 m6">\
                <div class="card blue-grey darken-1">\
                    <div class="card-content white-text">\
                        <span class="card-title">'+ w.title + '</span>\
                        <p>' + w.title + '</p>\
                    </div>\
                    <div class="card-action">\
                        <a href="' + w.link + '">see chooser</a>\
                        <a id ="' + w.id + '" class = "idLink" href="comments/:' + w.id + '">comment</a>\
                    </div>\
                </div >\
            </div > ');
    }
}