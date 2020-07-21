const notesCtrl = {};
const NoteModel = require("../models/Note");
// const Note = require("../models/Note");

notesCtrl.getNotes = async (req, res) => {
  const notes = await NoteModel.find();
  res.json(notes);
};
// notesCtrl.createNote = (req, res) => res.json({ message: "Note Saved" });
notesCtrl.createNote = async (req, res) => {
  const { title, content, date, author } = req.body;
  // console.log(test);
  const newNote = new NoteModel({
    title: title,
    content: content,
    date: date,
    author: author,
  });
  // console.log(newNote);
  await newNote.save();
  res.json({ message: "Note Saved" });
};

notesCtrl.getNote = async (req, res) => {
  // console.log(req.params.id);
  const note = await NoteModel.findById(req.params.id);
  console.log(note);
  res.json(note);
};

notesCtrl.updateNote = async (req, res) => {
  // console.log(req.params.id);
  const { title, content, author } = req.body;
  await NoteModel.findByIdAndUpdate(req.params.id, {
    title,
    content,
    author,
  });
  res.json({ message: "Note Updated" });
};

notesCtrl.deleteNote = async (req, res) => {
  await NoteModel.findByIdAndDelete(req.params.id);
  res.json({ message: "Note Deleted" });
};
// .get((req, res) => res.json({ title: "Text" }))
// .put((req, res) => res.json({ message: "Note Updated" }))
// .delete((req, res) => res.json({ message: "Note Deleted" }));

module.exports = notesCtrl;
