import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";

const Noteitem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;
  return (
    <div className="card p-4">
      <div className="bg-white border rounded-md overflow-hidden shadow-md">
        <div className="p-4">
          <div className="flex items-center justify-between">
            <h5 className="text-lg font-semibold mr-2">{note.title}</h5>
            <div className="icons flex">
            <i className="far fa-trash-alt mx-2 cursor-pointer" onClick={()=>{deleteNote(note._id)}}></i>
            <i className="far fa-edit mx-2 cursor-pointer" onClick={()=>{updateNote(note)}}></i>
            </div>
          </div>
          <p className="text-gray-700">{note.description}</p>
          <p className="mt-1 text-gray-700 italic">{note.tag}</p>
          <p className="mt-1 text-gray-400 text-sm">{`Added on ${note.date}`}</p>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
