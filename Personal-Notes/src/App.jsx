import React, { useState } from "react";
import AddNote from "./components/AddNote";
import NoteList from "./components/NoteList";
import { getInitialData } from "./utils/index";

function App() {
  const [notes, setNotes] = useState(getInitialData());

  const handleAddNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  const handleDeleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className="note-app">
      <header className="note-app__header">
        <h1>Aplikasi Catatan</h1>
      </header>
      <div className="note-app__body">
        <AddNote onAddNote={handleAddNote} />
        <NoteList notes={notes} handleDeleteNote={handleDeleteNote} />
      </div>
    </div>
  );

}

export default App;
