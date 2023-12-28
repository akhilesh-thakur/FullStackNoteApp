import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar bg-black text-white p-3">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div className="font-bold text-lg cursor-pointer">FullStackNoteApp</div>
          <div className="hidden md:flex ml-5">
            <Link to="/" className="mx-3">Home</Link>
            <Link to="/about" className="mx-3">About</Link>
          </div>
        </div>

        <div className="flex items-center">
          <div className="hidden md:flex">
            <Link to="/login" className="flex items-center font-bold mx-3 text-blue-500">Login</Link>
            <Link to="/signup" className="mx-3 bg-blue-500 text-white px-4 py-2 rounded">Signup</Link>
          </div>
          <div className="md:hidden cursor-pointer">
          </div>
        </div>
      </div>
    </div>
  );
}
