import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, handleDeleteNote }) {
  return (
    <div className="note-list">
      <h2 className="note-list-title">Daftar Catatan</h2>
      {notes.length > 0 ? (
        <ul className="note-list-items">
          {notes.map((note) => (
            <NoteItem
              key={note.id}
              note={note}
              handleDeleteNote={handleDeleteNote}
            />
          ))}
        </ul>
      ) : (
        <p className="note-list-empty">Tidak ada catatan.</p>
      )}
    </div>
  );
}

export default NoteList;
