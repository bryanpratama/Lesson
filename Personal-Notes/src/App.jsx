import React from 'react';
import './styles/style.css';

function App() {
  return (
    <div className="note-app">
      <header className="note-app__header">
        <h1>Aplikasi Catatan Pribadi</h1>
      </header>
      <div className="note-app__body">
        <div className="note-input">
          <h2>Buat Catatan</h2>
          <p className="note-input__title__char-limit">Sisa karakter: 50</p>
          <input
            type="text"
            placeholder="Judul catatan"
            className="note-input__title"
          />
          <textarea
            placeholder="Isi catatan..."
            className="note-input__body"
          ></textarea>
          <button>Tambah Catatan</button>
        </div>
        <h2>Daftar Catatan</h2>
        <div className="notes-list">
          <div className="note-item">
            <div className="note-item__content">
              <h3 className="note-item__title">Judul Catatan</h3>
              <p className="note-item__date">Dibuat pada: 01/01/2025</p>
              <p className="note-item__body">Ini adalah isi catatan.</p>
            </div>
            <div className="note-item__action">
              <button className="note-item__delete-button">Hapus</button>
              <button className="note-item__archive-button">Arsipkan</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
