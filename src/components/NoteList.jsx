import React from 'react';
import { useNavigate } from 'react-router-dom';

const NoteList = ({ notes, fetchNotes }) => {
  const navigate = useNavigate();

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this note?')) {
      try {
        await api.delete(`/notes/${id}`);
        fetchNotes();
      } catch (error) {
        console.error('Error deleting note:', error);
      }
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {notes.map((note) => (
        <div
          key={note.id}
          className="bg-white p-4 rounded shadow hover:shadow-md transition"
        >
          <h3 className="text-lg font-semibold text-gray-800 mb-2">{note.title}</h3>
          <p className="text-gray-600 mb-4">
            {note.description.length > 100
              ? `${note.description.substring(0, 100)}...`
              : note.description}
          </p>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">{note.category}</span>
            <div className="flex gap-2">
              <button
                onClick={() => navigate(`/edit/${note.id}`)}
                className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(note.id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NoteList;
