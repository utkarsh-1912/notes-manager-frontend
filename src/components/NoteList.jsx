import React from 'react';
import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline';

const NoteList = ({ notes, onNoteClick, onEditClick, onDeleteClick }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {notes.map((note) => (
        <div key={note._id} className="card" onClick={() => onNoteClick(note)}>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">{note.title}</h3>
          <p className="text-gray-600 mb-8">
            {note.description.length > 100 ? `${note.description.substring(0, 100)}...` : note.description}
          </p>
          <span className="bg-gray-700 text-xs text-gray-100 absolute px-2 py-1 rounded-xl left-3 bottom-3">{note.category}</span>

          <div className="absolute bottom-2 right-2 flex gap-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onEditClick(note._id);
              }}
              className="btn-secondary"
            >
              <PencilIcon className="h-4 w-4" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onDeleteClick(note._id);
              }}
              className="btn-danger"
            >
              <TrashIcon className="h-4 w-4" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NoteList;
