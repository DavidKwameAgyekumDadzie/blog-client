import React from 'react';
import {SiSparkpost} from "react-icons/si";
import {NavLink} from "react-router-dom"


function Navbar() {
  return (
    <div className="shadow-md bg-slate-300 ">
      <nav className="flex justify-between py-5 max-w-7xl mx-auto">
        <div className="flex items-center text-xl">
          <SiSparkpost className="text-red-500" />
          <span className=" text-cyan-500">DAVSEL BLOG</span>
        </div>
        <ul className="flex gap-5 px-2">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/add-post">Add Posts</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contacts</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar
