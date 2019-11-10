var mongoose = require("mongoose");

var Note = mongoose.Schema;

var NoteSchema = new Note({
  title: String,
  body: String
});

var Note = mongoose.model("Note", NoteSchema);
module.exports = Note;
