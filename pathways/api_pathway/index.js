const router = require('express').Router();
const {dbUpdate, generateNewNote, } = require("../../lib/notes");
const {notes} = require("../../db/db.json");
const {v4: uuidv4} = require('uuid');

router.post("/notes", (req, res) => {
    req.body.id = uuidv4();
    const newUserNote = generateNewNote(req.body, notes);
    res.json(newUserNote);
});

router.get("/notes", (req, res) => {
    let results = notes;
    res.json(results);
});

router.delete("/notes/:id" , (req, res) => {
    const params = req.params.id
    dbUpdate(params, notes);
    res.redirect('');
});

module.exports = router;