
import './App.css'

// import React, { useState } from 'react';

function App() {
  return (
    <form className="flex flex-col items-center">
      <label className="mb-2">
        Name:
        <input type="text" className="border border-gray-300 rounded-md p-2" />
      </label>
      <br />
      <label className="mb-2">
        Email:
        <input type="email" className="border border-gray-300 rounded-md p-2" />
      </label>
      <br />
      <label className="mb-2">
        Phone:
        <input type="tel" className="border border-gray-300 rounded-md p-2" />
      </label>
      <br />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
        Submit
      </button>
    </form>
  );
}

export default App
