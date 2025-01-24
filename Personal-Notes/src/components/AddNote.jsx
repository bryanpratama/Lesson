import React, { useState } from "react";

function AddNote({ onAddNote }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && body) {
      onAddNote({
        id: Date.now(),
        title,
        body,
        createdAt: new Date().toISOString(),
      });
      setTitle("");
      setBody("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="note-input">
      <input
        type="text"
        placeholder="Masukkan judul..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Masukkan isi catatan..."
        value={body}
        onChange={(e) => setBody(e.target.value)}
        required
      />
      <button type="submit">Tambah</button>
    </form>
  );
}

export default AddNote;
