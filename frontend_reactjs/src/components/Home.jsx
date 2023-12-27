import React from "react";

export default function Home() {
  return (
    <div className="flex justify-center">
      <div className="container w-[60vw] my-3">
        <h2 className="text-2xl font-bold mb-3">Add a Note</h2>
        <form className="my-3">
          <div className="mb-3">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:border-blue-500"
              id="title"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:border-blue-500"
              id="description"
              rows="3"
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="tag" className="block text-sm font-medium text-gray-700">
              Tag
            </label>
            <input
              type="text"
              className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:border-blue-500"
              id="tag"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
