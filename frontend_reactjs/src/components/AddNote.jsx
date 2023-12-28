import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";

export default function Addnote() {
  const context = useContext(noteContext);
  const { addNote } = context;

  const [note, setnote] = useState({ title: "", description: "", tag: "" });

  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
  };

  const onChange = (e) => {
    setnote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <div className="flex justify-center">
      <div className="AddNote w-[60vw] my-3 bg-slate-100 p-3 rounded-lg shadow-lg ">
        <h2 className="text-2xl font-bold mb-3">Add a Note</h2>
        <form className="my-3">
          <div className="mb-3">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <input
              type="text"
              htmlFor="title"
              name="title"
              id="title"
              onChange={onChange}
              className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              type="text"
              htmlFor="description"
              name="description"
              id="description"
              onChange={onChange}
              className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:border-blue-500"
              rows="3"
            ></textarea>
          </div>
          <div className="mb-3">
            <label
              htmlFor="tag"
              className="block text-sm font-medium text-gray-700"
            >
              Tag
            </label>
            <input
              type="text"
              htmlFor="tag"
              name="tag"
              id="tag"
              onChange={onChange}
              className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
            onClick={handleClick}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
