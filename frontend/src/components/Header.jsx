import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-slate-300 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <h1 className="font-bold text-sm sm:text-xl flex flex-wrap cursor-pointer">
          <Link to="/">
            <span className="text-slate-600">Rent</span>
            <span className="text-slate-500">Out</span>
          </Link>
        </h1>
        <form className="bg-slate-100 p-3 rounded-lg flex items-center  cursor-pointer">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent w-24 sm:w-64 focus:outline-none"
          />
          <FaSearch className="text-slate-500" />
        </form>
        <ul className="flex gap-4">
        <Link to='/home'>
        <li className="hidden sm:inline text-slate-700 hover:underline cursor-pointer">
            Home
          </li>
        </Link>
          
          <Link to='/about'>
          <li className="hidden sm:inline text-slate-700 hover:underline cursor-pointer">
            About
          </li>
          </Link>
          
          <Link to='/sign-in'>
          <li className="hidden sm:inline text-slate-700 hover:underline cursor-pointer">
            Sign in
          </li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
