const notesCtrl = {};

const Note = require('../models/Note');

notesCtrl.getNotes = async (req, res) => {
    const notes = await Note.find();
    res.json(notes);
};

notesCtrl.createNotes = async (req, res) => {
    const { title, content, date, author } = req.body;
    const newNote = new Note({
        title,
        content,
        date,
        author
    })
    await newNote.save();
    res.json({message: "Note saved"});
};

notesCtrl.getNote = async (req, res) => {
    const { id } = req.params;
    const note = await Note.findById(id);
    res.json(note);
};

notesCtrl.updateNotes = async (req, res) => {
    const { title, content, author } = req.body;
    const { id } = req.params;
    await Note.findByIdAndUpdate(id, {
        title,
        content,
        author
    });
    res.json({message: "Note updated"});
};

notesCtrl.deleteNotes = async (req, res) => {
    await Note.findByIdAndDelete(req.params.id);
    res.json({message: "Note Deleted"});
};

module.exports = notesCtrl;