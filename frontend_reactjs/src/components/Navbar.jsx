import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="navbar bg-black text-white">
        <ul className="flex  p-3">
          <li className="mx-5 font-bold text-lg cursor-pointer">
            FullStackNoteApp
          </li>
          <li className="mx-5 ml-[2rem] cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className="mx-5 cursor-pointer">
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
