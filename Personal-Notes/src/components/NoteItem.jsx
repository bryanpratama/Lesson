import React from "react";

function NoteItem({ note, handleDeleteNote }) {
  return (
    <li className="note-item">
      <h3 className="note-title">{note.title}</h3>
      <p className="note-body">{note.body}</p>
      <small className="note-date">
        Dibuat pada: {new Date(note.createdAt).toLocaleString()}
      </small>
      <br />
      <button className="note-delete" onClick={() => handleDeleteNote(note.id)}>
        Hapus
      </button>
    </li>
  );
}

export default NoteItem;
