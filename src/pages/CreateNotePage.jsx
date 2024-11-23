import React from 'react';
import { useNavigate } from 'react-router-dom';
import NoteForm from '../components/NoteForm';
import api from '../utils/api';
import BackHome from '../components/BackHome';
import Loader from '../components/Loader';

const CreateNotePage = () => {
  const navigate = useNavigate();

  const handleSave = async (noteData) => {
    try {
      <Loader/>
      await api.post('/notes', noteData);
      navigate('/'); // Redirect to the homepage after successful creation
    } catch (error) {
      console.error('Error creating note:', error);
    }
  };

  const handleCancel = () => {
    navigate('/'); // Redirect back to the homepage
  };

  return (
    <div className="w-full sm:max-w-[65vw] mx-auto p-6 bg-white">
      <BackHome onCancel={handleCancel}/>
      <div className="mx-3">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">Create a New Note</h1>
        <NoteForm onSave={handleSave} onCancel={handleCancel} />
      </div>      
    </div>
  );
};

export default CreateNotePage;
