const fs = require('fs');
const path = require('path');

function generateNewNote () {
    const newUserNote = body
    notesArray.push(newUserNote);
    fs.writeFileSync(
        path.join(__dirname, "../db/db.json"),
        JSON.stringify({notes: notesArray}, null, 2)
    );
    return newUserNote;
};

function dbUpdate (id, notesArray) {
    const removeNote = id;
    for (let i = 0; i < notesArray.length; i++) {
        if (removeNote === notesArray[i].id) {
            notesArray.splice(i, 1);
            fs.writeFileSync(
                path.join(__dirname, "../db/db.json"),
                JSON.stringify({notes: notesArray}, null, 2), err => {
                    if (err) {
                        throw err;
                    }
                });
        }
    } 
}

module.exports = {
    dbUpdate,
    generateNewNote
}