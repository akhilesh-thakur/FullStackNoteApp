import React, { useContext, useEffect } from "react";
import NoteContext from "../context/notes/noteContext";
import Noteitem from "./Noteitem";
import Addnote from "./AddNote";
import { useNavigate } from "react-router-dom";

const Notes = () => {
  const context = useContext(NoteContext);
  const {notes, getNotes} = context;
  const navigate = useNavigate();

  useEffect(() => {
    if(localStorage.getItem('token')){
      getNotes()
    }
    else{
      navigate('/login')
    }
      
  }, [])

  return (
      <div className="parent">
        <Addnote />
        <div className="parent-flex flex justify-center">
        <div className="Noteitems w-3/5">
          <h2 className="font-bold text-2xl">Your Notes</h2>
          <div className="card-container">
            <div className="m-3">
            {notes.length === 0 && "OOPS! Nothing to Display. Please add"}
            </div>
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
