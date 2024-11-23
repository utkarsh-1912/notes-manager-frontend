import React, { useState, useEffect } from 'react';

const NoteForm = ({ note, onSave, onCancel }) => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const noteData = { title, description, category };
    onSave(noteData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-800">
          Title
        </label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-700"
          placeholder="Enter note title"
          required
        />
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-800">
          Description
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 min-h-[35vh] border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-700"
          rows="5"
          placeholder="Enter note description"
          required
        ></textarea>
      </div>

      <div>
        <label htmlFor="category" className="block text-sm font-medium text-gray-800">
          Category
        </label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-700"
        >
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
          <option value="Others">Others</option>
        </select>
      </div>

      <div className="flex flex-col-reverse sm:flex-row justify-end gap-4">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 w-full sm:w-auto border border-gray-300 text-gray-800 rounded hover:bg-gray-100 focus:outline-none"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 w-full sm:w-auto bg-gray-800 text-white rounded hover:bg-gray-700 focus:outline-none"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default NoteForm;
