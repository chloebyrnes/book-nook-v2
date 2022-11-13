import React from "react";
import { useSpring, animated, useTransition } from "react-spring";
import { Link } from "react-router-dom";
import Burger from "../Burger/Burger";
import RandomAnimal from "../../hooks/RandomAnimal";

const Dashboard = ({ pageTitle, children }) => {
  const style1 = useSpring({
    from: { opacity: 0, marginTop: -100 },
    to: { opacity: 1, marginTop: 0 },
    config: { duration: 3000 },
  });

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
            <a href="/search" className="mx-4">
              Search
            </a>
            <a className="mx-4" href="/profile">
              Profile
            </a>
            <a className="ml-4" href="#">
              Logout
            </a>
          </div>

          {/* NAVBAR AT 768PX & LOWER */}
          <div className="md:hidden">
            <Burger />
          </div>
        </div>
      </nav>

      <main>
        {/* GENERATE ANIMAL HEADER */}
        <animated.div style={style1}>
          <div className="mt-0 mb-8 flex flex-col justify-center items-center">
            <RandomAnimal />
          </div>
        </animated.div>
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
