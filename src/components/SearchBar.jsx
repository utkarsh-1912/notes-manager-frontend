import React from 'react';

const SearchBar = ({ searchQuery, setSearchQuery, setCategoryFilter }) => {
  return (
    <div className="flex items-center space-x-4 w-full">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search by title..."
        className="p-2 border rounded-md w-full"
      />
      <select
        onChange={(e) => setCategoryFilter(e.target.value)}
        className="p-2 border rounded-md"
      >
        <option value="">All Categories</option>
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
        <option value="Others">Others</option>
      </select>
    </div>
  );
};

export default SearchBar;
