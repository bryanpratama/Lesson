import React from "react";

function DeleteNote({ id, onDeleteNote }) {
  return (
    <button onClick={() => onDeleteNote(id)} className="delete-button">
      Hapus
    </button>
  );
}

export default DeleteNote;
