import React, { useState } from "react";
import NoteInput from "./components/NoteInput";
import NoteList from "./components/NoteList";
import './styles/style.css';


const initialNotes = [
  {
    id: 1,
    title: "Babel",
    body: "Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama.",
    archived: false,
    createdAt: "2022-04-14T04:27:34.572Z",
  },
  {
    id: 2,
    title: "React",
    body: "React adalah pustaka JavaScript untuk membangun antarmuka pengguna.",
    archived: false,
    createdAt: "2022-04-15T10:00:00.000Z",
  },
];

function App() {
  const [notes, setNotes] = useState(initialNotes);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleAddNote = (e) => {
    e.preventDefault();
    if (!title || !body) return;

    const newNote = {
      id: +new Date(),
      title,
      body,
      archived: false,
      createdAt: new Date().toISOString(),
    };

    setNotes([...notes, newNote]);
    setTitle("");
    setBody("");
  };

  const handleDeleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className="App">
      <h1>Aplikasi Catatan Pribadi</h1>
      <NoteInput
        title={title}
        body={body}
        setTitle={setTitle}
        setBody={setBody}
        handleAddNote={handleAddNote}
      />
      <NoteList notes={notes} handleDeleteNote={handleDeleteNote} />
    </div>
  );
}

export default App;
