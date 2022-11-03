const util = require("util");
const fs = require("fs");
const uuidv1 = require("uuid/v1");
const path = require("path");

const readFileCon = util.promisify(fs.readFile);
const writeFileCon = util.promisify(fs.writeFile);

class Store {
  read() {
    return readFileCon("db/db.json", "utf8");
  }

  write(note) {
    return writeFileCon("db/db.json", JSON.stringify(note));
  }

  getNotes() {
    return this.read().then((notes) => {
      let parseNotes;

      try {
        parseNotes = [].concat(JSON.parse(notes));
      } catch (err) {
        parseNotes = [];
      }

      return parseNotes;
    });
  }

  addNewNote(note) {
    const { title, text } = note;

    if (!title || !text) {
      throw new Error("Note cannot be blank");
    }
    const newNote = { title, text, id: uuidv1() };

    return this.getNotes()
      .then((notes) => [...notes, newNote])
      .then((updateNotes) => this.write(updateNotes))
      .then(() => newNote);
  }

  deleteNote(id) {
    return this.getNotes()
      .then((notes) => notes.filter((note) => note.id !== id))
      .then((filterNotes) => this.write(filterNotes));
  }
}

module.exports = new Store();
