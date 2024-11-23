import React, { useState, useEffect, useCallback } from 'react';
import SearchBar from '../components/SearchBar';
import { useNavigate } from 'react-router-dom';
import { PencilIcon, TrashIcon, XMarkIcon, PlusIcon } from '@heroicons/react/24/outline'; // Updated icon import
import api from '../utils/api';

const HomePage = () => {
  const [notes, setNotes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedNote, setSelectedNote] = useState(null);
  const navigate = useNavigate();

  // Fetch notes from the backend
  const fetchNotes = useCallback(async () => {
    try {
      const response = await api.get('/notes', {
        params: { search: searchQuery, category: categoryFilter },
      });
      setNotes(response.data);
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  }, [searchQuery, categoryFilter]);

  // Fetch notes whenever searchQuery or categoryFilter changes
  useEffect(() => {
    fetchNotes();
  }, [fetchNotes]);

  // Function to open modal with full note content
  const openModal = (note) => {
    setSelectedNote(note);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedNote(null);
  };

  // Function to navigate to the edit page
  const handleEditClick = (id) => {
    navigate(`/edit/${id}`);
  };

  // Function to delete a note
  const handleDeleteClick = async (id) => {
    try {
      await api.delete(`/notes/${id}`);
      fetchNotes(); // Refresh the note list after deleting
    } catch (error) {
      console.error('Error deleting note:', error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
        Personal Notes Manager
      </h1>

      {/* Search and Category Filter with Create Button */}
      <div className="flex items-center justify-between flex-col sm:flex-row mb-6">
        <SearchBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          setCategoryFilter={setCategoryFilter}
        />
        <button
            onClick={() => navigate('/create')}
            className="bg-blue-500 text-white m-2 px-3 py-2 rounded hover:bg-blue-600 flex items-center w-full md:w-auto"
          >
            <PlusIcon className="h-5 w-5 mr-2" />
            Create
        </button>
      </div>

      {/* Note List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {notes.map((note) => (
          <div
            key={note._id}
            className="bg-white p-4 rounded shadow hover:shadow-md transition cursor-pointer relative"
            onClick={() => openModal(note)} // Open modal on note click
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {note.title}
            </h3>
            <p className="text-gray-600 mb-4">
              {note.description.length > 100
                ? `${note.description.substring(0, 100)}...`
                : note.description}
            </p>
            <span className="text-sm text-gray-500">{note.category}</span>

            {/* Edit and Delete Icons within the card */}
            <div className="absolute top-2 right-2 flex gap-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleEditClick(note._id); // Edit note
                }}
                className="text-blue-600 hover:text-blue-800 border rounded-full p-2"
              >
                <PencilIcon className="h-6 w-6" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleDeleteClick(note._id); // Delete note
                }}
                className="text-red-600 hover:text-red-800 border rounded-full p-2"
              >
                <TrashIcon className="h-6 w-6" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Popup Modal for Full Note Details */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl md:max-w-[80vw] w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-semibold text-gray-800">{selectedNote.title}</h3>
              <button onClick={closeModal} className="text-gray-500 hover:text-gray-700 bg-gray-200 rounded-lg p-2">
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>
            <p className="text-gray-700 mb-4">{selectedNote.description}</p>
            <span className="text-sm text-gray-500">Category: {selectedNote.category}</span>

            <div className="flex justify-end gap-4 mt-6">
              {/* Edit and Delete Icons */}
              <button
                onClick={() => handleEditClick(selectedNote._id)}
                className="text-blue-600 hover:text-blue-800 bg-gray-200 rounded-full p-2"
              >
                <PencilIcon className="h-6 w-6" />
              </button>
              <button
                onClick={() => handleDeleteClick(selectedNote._id)}
                className="text-red-600 hover:text-red-800 bg-gray-200 rounded-full p-2"
              >
                <TrashIcon className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
