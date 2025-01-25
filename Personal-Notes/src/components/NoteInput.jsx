import React from "react";

function NoteInput({ title, body, setTitle, setBody, handleAddNote }) {
  const handleTitleChange = (e) => {
    if (e.target.value.length <= 50) {
      setTitle(e.target.value);
    }
  };

  return (
    <form className="note-input" onSubmit={handleAddNote}>
      <div className="note-input__title">
        <input
          type="text"
          placeholder="Judul"
          value={title}
          onChange={handleTitleChange}
        />
        <p className="note-input__title__char-limit">
          Sisa karakter: {50 - title.length}
        </p>
      </div>
      <textarea
        className="note-input__body"
        placeholder="Tulis catatanmu di sini..."
        value={body}
        onChange={(e) => setBody(e.target.value)}
      ></textarea>
      <button type="submit">Tambah Catatan</button>
    </form>
  );
}

export default NoteInput;
