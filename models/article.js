let mongoose = require("mongoose");

let Schema = mongoose.Schema;

let StorySchema = new Schema({
    title: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    rId: {
        type: String,
        required: true
    },
    comments: {
        type: Array,
        required: true
    },
    note: {
        type: Schema.Types.ObjectId,
        ref: "Note"
    }
});
let story = mongoose.model("articles", StorySchema);
module.exports = story;