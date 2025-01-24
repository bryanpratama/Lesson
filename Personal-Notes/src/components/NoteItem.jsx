import React from "react";

function NoteItem({ note, handleDeleteNote }) {
  return (
    <div className="note-item">
      <div className="note-item__content">
        <h3 className="note-item__title">{note.title}</h3>
        <p className="note-item__body">{note.body}</p>
      </div>
      <div className="note-item__action">
        <button
          className="note-item__delete-button"
          onClick={() => handleDeleteNote(note.id)}
        >
          Hapus
        </button>
      </div>
    </div>
  );
}

export default NoteItem;
