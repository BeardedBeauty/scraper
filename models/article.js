let mongoose = require("mongoose");

let Schema = mongoose.Schema;

let StorySchema = new Schema({
    title: {
        type: String,
        required: true
    },
    link:  {
        type: String,
        required: true
    },
    note: {
        type: Schema.Types.ObjectId,
        ref: "Note"
    }
});
let story = mongoose.model("articles", StorySchema);
module.exports = story;