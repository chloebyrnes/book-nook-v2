import React from "react";
import { Link } from 'react-router-dom';
// import AnchorLink from "react-anchor-link-smooth-scroll";
import Burger from "../Burger/Burger";
import RandomAnimal from '../../hooks/RandomAnimal';

const Dashboard = ({ pageTitle, children }) => {
  return (
    <>
      <title>Book Nook | {pageTitle}</title>

      <nav className="mx-8 my-6 flex justify-between items-center">
        <div>
          <h1 className="drop-shadow-lg text-5xl md:text-7xl">
            <Link to="/search" className="hover:text-[#7286ff]">
              book<span className="text-[#7286ff]">nook</span>
            </Link>
          </h1>
        </div>

        {/* NAVBAR AT 768PX & HIGHER */}
        <div className="uppercase tracking-widest">
          <div className="hidden md:flex bg-[#02030ac8] px-7 py-2 rounded-md font-semibold">
            <Link href="#Trending" className="mr-4">Trending</Link>
            <a href="/search" className="mx-4">Search</a>
            <a className="mx-4" href="/profile">Profile</a>
            <a className="ml-4" href="#">Logout</a>
          </div>

          {/* NAVBAR AT 768PX & LOWER */}
          <div className="md:hidden">
            <Burger />
          </div>
        </div>
      </nav>

      <main>
        {/* GENERATE ANIMAL HEADER */}
        <div className="flex flex-col justify-center items-center py-4">
          <RandomAnimal />
        </div>
        
        {children}
        </main>

      <footer class="py-8 text-center">
        <p class="md:text-base text-sm tracking-wider font-medium text-gray-400">
          &copy; {new Date().getFullYear()} The Spice Girls, LLC.
        </p>
      </footer>
    </>
  );
};
export default Dashboard;