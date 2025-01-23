// Import dependencies
import React, { useState } from "react";

// Initial data for notes
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
  // State to store notes
  const [notes, setNotes] = useState(initialNotes);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  // Handle form submission to add a note
  const handleAddNote = (e) => {
    e.preventDefault();
    if (!title || !body) return;

    const newNote = {
      id: +new Date(), // Unique ID based on timestamp
      title,
      body,
      archived: false,
      createdAt: new Date().toISOString(),
    };

    setNotes([...notes, newNote]);
    setTitle("");
    setBody("");
  };

  // Handle note deletion
  const handleDeleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className="App">
      <h1>Aplikasi Catatan Pribadi</h1>

      {/* Form to add a new note */}
      <form onSubmit={handleAddNote}>
        <input
          type="text"
          placeholder="Judul"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Isi catatan"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <button type="submit">Tambah Catatan</button>
      </form>

      {/* Notes List */}
      <h2>Daftar Catatan</h2>
      {notes.length > 0 ? (
        <ul>
          {notes.map((note) => (
            <li key={note.id}>
              <h3>{note.title}</h3>
              <p>{note.body}</p>
              <small>Dibuat pada: {new Date(note.createdAt).toLocaleString()}</small>
              <br />
              <button onClick={() => handleDeleteNote(note.id)}>Hapus</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Tidak ada catatan.</p>
      )}
    </div>
  );
}

export default App;
