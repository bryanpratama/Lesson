import React, { useState } from "react";
import TitleInput from "./TitleInput";

function AddNote({ onAddNote }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

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

  const handleTitleChange = (e) => {
    if (e.target.value.length <= MAX_TITLE_LENGTH) {
      setTitle(e.target.value);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="note-input">
      <h2>Tambah Catatan</h2>
      <TitleInput
        title={title}
        maxLength={MAX_TITLE_LENGTH}
        handleTitleChange={handleTitleChange}
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
