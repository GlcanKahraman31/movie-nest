import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="p-4 bg-black text-white flex justify-between">
      <Link to="/" className="text-2xl font-bold">Movie Nest</Link>
    </nav>
  );
}

export default Navbar;
