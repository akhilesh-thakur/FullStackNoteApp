import React, { useContext } from 'react';
import NoteContext from '../context/notes/noteContext';
import Noteitem from './Noteitem';

const Notes = () => {
  const context = useContext(NoteContext);
  const { notes } = context;

  return (
    <div className="row my-3">
      <h2>Your Notes</h2>
      {notes.map((note) => (
        <Noteitem key={note._id} note={note} />
      ))}
    </div>
  );
};

export default Notes;
