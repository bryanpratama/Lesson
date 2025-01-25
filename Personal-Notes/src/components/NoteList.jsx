import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, handleDeleteNote, handleArchiveNote }) {
  return (
    <div>
      {notes.length > 0 ? (
        <div className="notes-list">
          {notes.map((note) => (
            <NoteItem
              key={note.id}
              note={note}
              handleDeleteNote={handleDeleteNote}
              handleArchiveNote={handleArchiveNote}
            />
          ))}
        </div>
      ) : (
        <p className="notes-list__empty-message">Tidak ada catatan.</p>
      )}
    </div>
  );
}

export default NoteList;
