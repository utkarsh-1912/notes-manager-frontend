import React from 'react';
import { PencilIcon, TrashIcon, XMarkIcon, EyeIcon } from '@heroicons/react/24/outline'; // Importing EyeIcon for enlarge

const NoteModal = ({ note, onClose, onEdit, onDelete, onEnlarge }) => {
  if (!note) return null;

  return (
    <div className="modal-overlay p-2">
      <div className="modal-content max-h-fit">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-semibold text-gray-800">{note.title}</h3>
          <button onClick={onClose} className="btn-secondary">
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>
        <p className="text-gray-700 mb-4 whitespace-pre-line leading-relaxed overflow-y-auto max-h-[57vh] border-y p-2">{note.description}</p>
        <span className="text-sm text-gray-500">Category: {note.category}</span>

        <div className="flex justify-end gap-4 sm:mt-1">
          <button onClick={() => onEnlarge(note._id)} className="btn-secondary">
            <EyeIcon className="h-4 w-4" />
          </button>
          <button onClick={() => onEdit(note._id)} className="btn-secondary">
            <PencilIcon className="h-4 w-4" />
          </button>
          <button onClick={() => onDelete(note._id)} className="btn-danger">
            <TrashIcon className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoteModal;
