const noteForm = document.querySelector("#note-form");
const noteTitleInput = document.querySelector("#note-title");
const noteInput = document.querySelector("#note-input");
const noteList = document.querySelector("#note-list");

let notes = [];

function addNote() {
    const noteTitle = noteTitleInput.value.trim();
    const noteText = noteInput.value.trim();
    if (noteText === "") {
        return;
    }
    const note = {
        id: Date.now(),
        title: noteTitle,
        text: noteText
    };
    notes.push(note);
    noteTitleInput.value = "";
    noteInput.value = "";
    displayNotes();
}

function deleteNote(id) {
    notes = notes.filter(note => note.id !== id);
    displayNotes();
}

function displayNotes() {
    noteList.innerHTML = "";
    notes.forEach(note => {
        const li = document.createElement("li");
        const h2 = document.createElement("h2");
        h2.textContent = note.title;
        const p = document.createElement("p");
        p.textContent = note.text;
        const button = document.createElement("button");
        button.textContent = "Delete";
        button.addEventListener("click", () => deleteNote(note.id));
        li.appendChild(h2);
        li.appendChild(p);
        li.appendChild(button);
        noteList.appendChild(li);
    });
}

noteForm.addEventListener("submit", event => {
    event.preventDefault();
    addNote();
});

displayNotes();