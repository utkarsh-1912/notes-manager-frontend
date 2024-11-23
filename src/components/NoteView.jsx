import React from 'react';
import { PencilIcon, TrashIcon, ShareIcon } from '@heroicons/react/24/outline';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const NoteView = ({ note, onEdit, onDelete }) => {
  const { id } = useParams();
  const handleShare = () => {
    const shareableLink = `${window.location.origin}/note/${id}`;
    navigator.clipboard
      .writeText(shareableLink)
      .then(() => {
        toast("Link copied to clipboard!");
      })
      .catch((err) => {
        console.error('Error copying link:', err);
        alert('Failed to copy link.');
      });
  };

  return (
    <div className="note-view">
      {/* Title Section */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">{note.title}</h2>

      {/* Category and Actions */}
      <div className="flex justify-between items-center mb-2">
        <span className="bg-gray-700 text-sm text-gray-100 flex px-3 py-1 rounded-2xl">{note.category}</span>
        <div className="flex gap-2">
          <button onClick={() => onEdit(id)} className="btn-secondary">
            <PencilIcon className="h-5 w-5" title="Edit" />
          </button>
          <button onClick={() => onDelete(id)} className="btn-danger">
            <TrashIcon className="h-5 w-5" title="Delete" />
          </button>
          <button onClick={handleShare} className="btn-secondary">
            <ShareIcon className="h-5 w-5" title="Share" />
          </button>
        </div>
      </div>

      <hr/>

      {/* Description */}
      <p className="text-gray-700 whitespace-pre-line leading-relaxed mb-6">{note.description}</p>

      {/* Add some gap at the bottom */}
      <div className="mb-10"></div>
    </div>
  );
};

export default NoteView;
