import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NoteForm = ({ note, onSave }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Others');

  useEffect(() => {
    if (note) {
      setTitle(note.title);
      setDescription(note.description);
      setCategory(note.category);
    }
  }, [note]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newNote = { title, description, category };
    if (note) {
      await axios.put(`/api/notes/${note._id}`, newNote);
    } else {
      await axios.post('/api/notes', newNote);
    }
    onSave();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium">Title</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded-md"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Description</label>
        <textarea
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border rounded-md"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Category</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-2 border rounded-md"
        >
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
          <option value="Others">Others</option>
        </select>
      </div>
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">
        Save
      </button>
    </form>
  );
};

export default NoteForm;
