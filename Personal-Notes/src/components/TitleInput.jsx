import React from "react";

function TitleInput({ title, maxLength, handleTitleChange }) {
  return (
    <div className="note-input__title">
      <input
        type="text"
        placeholder="Masukkan judul..."
        value={title}
        onChange={handleTitleChange}
        required
      />
      <p className="note-input__title__char-limit">
        Sisa karakter: {maxLength - title.length}
      </p>
    </div>
  );
}

export default TitleInput;
