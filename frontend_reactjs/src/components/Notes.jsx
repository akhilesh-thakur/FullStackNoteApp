import React, { useContext, useEffect, useRef, useState } from "react";
import NoteContext from "../context/notes/noteContext";
import Noteitem from "./Noteitem";
import Addnote from "./Addnote";

const Notes = () => {
  const context = useContext(NoteContext);
  const {notes, getNotes} = context;
  useEffect(() => {
      getNotes()
  }, [])

  return (
      <div className="parent">
        <Addnote />
        <div className="parent-flex flex justify-center">
        <div className="Noteitems w-3/5">
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
