import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../utils/api';
import '../styles/style.css';
import NoteList from '../components/NoteList';
import NoteModal from '../components/NoteModal';
import Navbar from '../components/Navbar';
import Loader from '../components/Loader';

const HomePage = () => {
  const [notes, setNotes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedNote, setSelectedNote] = useState(null);
  const [loading,setLoading] = useState(false);
  const navigate = useNavigate();

  // Fetch notes from the API based on searchQuery and categoryFilter
  const fetchNotes = useCallback(async () => {
    try {
      setLoading(true);
      const response = await api.get('/notes', {
        params: { search: searchQuery, category: categoryFilter },
      });
      setLoading(false);
      setNotes(response.data);
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  }, [searchQuery, categoryFilter]);

  // Trigger fetchNotes when either searchQuery or categoryFilter changes
  useEffect(() => {
    fetchNotes();
  }, [fetchNotes]);

  const openModal = (note) => {
    setSelectedNote(note);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedNote(null);
  };

  const handleEditClick = (id) => {
    navigate(`/edit/${id}`);
  };

  const handleEnlarge = (id) => {
    navigate(`/note/${id}`);
  };

  const handleDeleteClick = async (id) => {
    try {
      await api.delete(`/notes/${id}`);
      fetchNotes();  // Refresh notes list after deletion
      setIsModalOpen(false);
      setSelectedNote(null);
    } catch (error) {
      console.error('Error deleting note:', error);
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-3">
    <Navbar 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery} 
        setCategoryFilter={setCategoryFilter} 
    />

      {loading && <Loader/>}
      <NoteList 
        notes={notes} 
        onNoteClick={openModal} 
        onEditClick={handleEditClick} 
        onDeleteClick={handleDeleteClick} 
      />

      {isModalOpen && (
        <NoteModal
          note={selectedNote}
          onClose={closeModal}
          onEdit={handleEditClick}
          onDelete={handleDeleteClick}
          onEnlarge={handleEnlarge}
        />
      )}
    </div>
  );
};

export default HomePage;
