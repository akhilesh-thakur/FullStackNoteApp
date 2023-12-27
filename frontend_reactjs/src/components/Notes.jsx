import React, { useContext } from "react";
import NoteContext from "../context/notes/noteContext";
import Noteitem from "./Noteitem";
import Addnote from "./Addnote";

const Notes = () => {
  const context = useContext(NoteContext);
  const { notes } = context;

  return (
    <div className="parent flex justify-center ">
      <div className="child flex justify-center flex-col">
        <Addnote />
        <div className="YourNotes">
          <h2 className="font-bold text-2xl">Your Notes</h2>
          <div className="card-container">
            {notes.map((note) => (
              <Noteitem key={note._id} note={note} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notes;
