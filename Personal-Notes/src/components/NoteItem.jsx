import React from "react";
import { showFormattedDate } from "../utils";

function NoteItem({ note, handleDeleteNote }) {
  const { id, title, body, createdAt } = note;

  return (
    <div className="note-item">
  <div className="note-item__content">
    <div className="note-item__icon"></div>
    <h3 className="note-item__title">{title}</h3>
    <p className="note-item__date">{showFormattedDate(createdAt)}</p>
    <p className="note-item__body">{body}</p>
  </div>
  <div className="note-item__action">
    <button className="note-item__delete-button" onClick={() => handleDeleteNote(id)}>Hapus</button>
  </div>
</div>

  );
}

export default NoteItem;
