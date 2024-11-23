import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import NoteForm from '../components/NoteForm';
import api from '../utils/api';
import BackHome from '../components/BackHome';
import Loader from '../components/Loader';

const NoteEditPage = () => {
  const { id } = useParams(); // Get the note ID from the URL
  const navigate = useNavigate();
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch all notes and find the one to edit
  const fetchNotes = async () => {
    try {
      const response = await api.get('/notes');
      const foundNote = response.data.find((note) => note._id === id);
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

  const handleSave = async (updatedNote) => {
    try {
      await api.put(`/notes/${id}`, updatedNote);
      navigate('/'); // Redirect to the homepage after saving
    } catch (error) {
      console.error('Error saving note:', error);
    }
  };

  const handleCancel = () => {
    navigate('/'); // Redirect to homepage if the user cancels
  };

  if (loading) {
    return <div className="text-center mt-10 text-gray-700">Loading...<Loader/></div>;
  }

  if (!note) {
    return <div className="text-center mt-10 text-red-500">Note not found</div>;
  }

  return (
    <div className="w-full sm:max-w-[65vw] mx-auto p-6 bg-white">
      <BackHome onCancel={handleCancel}/>
      <div className="mx-3">
         <h1 className="text-2xl font-semibold text-gray-800 mb-6">Edit Note</h1>
         <NoteForm note={note} onSave={handleSave} onCancel={handleCancel} />
      </div>
    </div>
  );
};

export default NoteEditPage;
