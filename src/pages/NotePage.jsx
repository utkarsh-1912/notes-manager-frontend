import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../utils/api';
import BackHome from '../components/BackHome';
import NoteView from '../components/NoteView';  // Import NoteView component
import Loader from '../components/Loader';

const NotePage = () => {
  const { id } = useParams(); // Get the note ID from the URL
  const navigate = useNavigate();
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch note by ID from the server
  const fetchNote = async () => {
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
      console.error('Error fetching note:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNote();
  }, [id]);  // Refetch if the ID changes

  const handleCancel = () => {
    navigate('/'); 
  };

  const handleEditClick = (id) => {
    console.log(id);
    navigate(`/edit/${id}`);
  };

  const handleDeleteClick = async (id) => {
    try {
      await api.delete(`/notes/${id}`);
      navigate(`/`);
    } catch (error) {
      console.error('Error deleting note:', error);
    }
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
        <NoteView note={note} onEdit={handleEditClick} onDelete={handleDeleteClick}/>
      </div>
    </div>
  );
};

export default NotePage;
