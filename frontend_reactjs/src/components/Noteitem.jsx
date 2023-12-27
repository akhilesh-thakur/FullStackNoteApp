import React from "react";

const Noteitem = (props) => {
  const { note } = props;
  return (
    <div className="card p-4">
      <div className="bg-white border rounded-md overflow-hidden shadow-md">
        <div className="p-4">
          <div className="flex items-center">
            <h5 className="text-lg font-semibold mr-2">{note.title}</h5>
            <div className="icons flex ml-[81%]">
            <i className="far fa-trash-alt mx-2"></i>
            <i className="far fa-edit mx-2"></i>
            </div>
          </div>
          <p className="text-gray-700">{note.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
