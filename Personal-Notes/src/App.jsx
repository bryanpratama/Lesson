import React, { useState } from "react";
import AddNote from "./components/AddNote";
import NoteList from "./components/NoteList";
import { getInitialData } from "./utils/index";
import SearchBar from "./components/SearchBar";

function App() {
  const [notes, setNotes] = useState(getInitialData());
  const [searchQuery, setSearchQuery] = useState("");

  const handleAddNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  const handleDeleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const handleArchiveNote = (id) => {
    setNotes(
      notes.map((note) =>
        note.id === id ? { ...note, archived: !note.archived } : note
      )
    );
  };

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const activeNotes = filteredNotes.filter((note) => !note.archived);
  const archivedNotes = filteredNotes.filter((note) => note.archived);

  return (
    <div className="note-app">
      <header className="note-app__header">
        <h1>Catatan</h1>
        <SearchBar setSearchQuery={setSearchQuery} />
      </header>
      <div className="note-app__body">
        <AddNote onAddNote={handleAddNote} />
        <h2>Catatan Aktif</h2>
        <NoteList
          notes={activeNotes}
          handleDeleteNote={handleDeleteNote}
          handleArchiveNote={handleArchiveNote}
        />
        <h2>Catatan Arsip</h2>
        <NoteList
          notes={archivedNotes}
          handleDeleteNote={handleDeleteNote}
          handleArchiveNote={handleArchiveNote}
        />
      </div>
    </div>
  );
}

export default App;
