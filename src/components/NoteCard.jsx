import React from 'react';
import { format } from 'date-fns';
import './NoteCard.css';

const NoteCard = ({ 
  title, 
  content, 
  date, 
  tags = [], 
  onEdit, 
  onDelete 
}) => {
  return (
    <div className="note-card">
      <div className="note-header">
        <h3 className="note-title">{title}</h3>
        <div className="note-actions">
          <button onClick={onEdit} className="action-button edit-button">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill="currentColor">
              <path d="M13.586 3.586a2 2 0 112.828 2.828l-12 12a2 2 0 01-2.828 0l-1.414-1.414a2 2 0 010-2.828l12-12z" />
            </svg>
          </button>
          <button onClick={onDelete} className="action-button delete-button">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>

      <div className="note-content">
        {content}
      </div>

      <div className="note-footer">
        <div className="note-tags">
          {tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>
        <div className="note-date">
          {format(new Date(date), 'MMM d, yyyy')}
        </div>
      </div>
    </div>
  );
};

export default NoteCard; 