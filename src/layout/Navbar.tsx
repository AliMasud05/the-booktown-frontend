import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      {" "}
      <button >
        <Link to="/books">Products</Link>
      </button>
    </div>
  );
}

export default Navbar