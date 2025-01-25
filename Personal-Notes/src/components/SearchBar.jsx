import React from "react";

function SearchBar({ setSearchQuery }) {
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Cari catatan..."
      onChange={handleSearchChange}
      className="search-bar"
    />
  );
}

export default SearchBar;
