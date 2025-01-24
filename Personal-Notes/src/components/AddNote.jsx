import React, { useState } from "react";

function AddNote({ onAddNote }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  // Maksimal panjang judul
  const MAX_TITLE_LENGTH = 50;

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

  // Fungsi pembatas judul
  const handleTitleChange = (e) => {
    if (e.target.value.length <= MAX_TITLE_LENGTH) {
      setTitle(e.target.value);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="note-input">
      <div className="note-input__title">
        <input
          type="text"
          placeholder="Masukkan judul..."
          value={title}
          onChange={handleTitleChange}
          required
        />
        <p className="note-input__title__char-limit">
          Sisa karakter: {MAX_TITLE_LENGTH - title.length}
        </p>
      </div>
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
