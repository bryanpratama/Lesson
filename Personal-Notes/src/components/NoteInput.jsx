import React from "react";

function NoteInput({ title, body, setTitle, setBody, handleAddNote }) {
  return (
    <form className="note-input" onSubmit={handleAddNote}>
      <input
        className="note-input-title"
        type="text"
        placeholder="Judul"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="note-input-body"
        placeholder="Isi catatan"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      ></textarea>
      <button className="note-input-submit" type="submit">
        Tambah Catatan
      </button>
    </form>
  );
}

export default NoteInput;
