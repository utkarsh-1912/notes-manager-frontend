import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../utils/api';

const NoteEditPage = () => {
  const { id } = useParams();  // Get the id from the URL
  const navigate = useNavigate();
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch all notes
  const fetchNotes = async () => {
    try {
      const response = await api.get('/notes');
      // Find the note that matches the ID from the list of notes
      const foundNote = response.data.find(note => note._id === id);
      if (foundNote) {
        setNote({
          title: foundNote.title,
          description: foundNote.description,
          category: foundNote.category,
        });
      } else {
        console.error('Note not found');
      }
      setLoading(false);
    } catch (error) {
      console.error('Error fetching notes:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, [id]);

  // If the note is still loading or not found
  if (loading) {
    return <div>Loading...</div>;
  }

  if (!note) {
    return <div>Note not found</div>;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Submit the edited note (you can replace with an API call)
      await api.put(`/notes/${id}`, {
        title: note.title,
        description: note.description,
        category: note.category,
      });
      navigate('/');  // Redirect to home after saving
    } catch (error) {
      console.error('Error editing note:', error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-semibold text-gray-800 mb-4">Edit Note</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 my-2">Title</label>
          <input
            type="text"
            id="title"
            value={note.title}
            onChange={(e) => setNote({ ...note, title: e.target.value })}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 my-2">Description</label>
          <textarea
            id="description"
            value={note.description}
            onChange={(e) => setNote({ ...note, description: e.target.value })}
            required
            className="w-full min-h-[30vh] px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="category" className="block text-gray-700 my-2">Category</label>
          <select
            id="category"
            value={note.category}
            onChange={(e) => setNote({ ...note, category: e.target.value })}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          >
            <option value="Work">Work</option>
            <option value="Personal">Personal</option>
            <option value="Others">Others</option>
          </select>
        </div>
        <button type="submit" className="px-6 py-2 bg-blue-500 text-white rounded-md">Save</button>
      </form>
    </div>
  );
};

export default NoteEditPage;
