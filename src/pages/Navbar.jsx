import React from "react";
import { HashLink } from "react-router-hash-link";
import logo from "../assets/img/logo.png";

const Navbar = () => {
  return (
    <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-transparent text-sm py-2">
      <nav
        className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between"
        aria-label="Global"
      >
        <div className="flex items-center justify-between">
          <HashLink className="font-bold" to="#">
            <img className="h-10 md:h-14" src={logo} alt="" />
          </HashLink>
          <div className="sm:hidden">
            <button
              type="button"
              className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
              data-hs-collapse="#navbar-collapse-with-animation"
              aria-controls="navbar-collapse-with-animation"
              aria-label="Toggle navigation"
            >
              <svg
                className="hs-collapse-open:hidden w-4 h-4"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
              <svg
                className="hs-collapse-open:block hidden w-4 h-4"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </button>
          </div>
        </div>
        <div
          id="navbar-collapse-with-animation"
          className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
        >
          <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:pl-5 text-white">
            <HashLink
              className="font-bold md:py-4 relative before:absolute before:bottom-2 md:before:left-0 md:before:bg-cyan-400 md:before:w-0 md:before:h-[2px] md:before:hidden md:hover:before:block md:hover:before:w-full"
              to="#"
              smooth
            >
              Home
            </HashLink>
            <HashLink
              className="font-bold md:py-4 relative before:absolute before:bottom-2 md:before:left-0 md:before:bg-cyan-400 md:before:w-0 md:before:h-[2px] md:before:hidden md:hover:before:block md:hover:before:w-full"
              to="#skill"
              smooth
            >
              Skill
            </HashLink>
            <HashLink
              className="font-bold md:py-4 relative before:absolute before:bottom-2 md:before:left-0 md:before:bg-cyan-400 md:before:w-0 md:before:h-[2px] md:before:hidden md:hover:before:block md:hover:before:w-full"
              to="#projects"
              smooth
            >
              Projects
            </HashLink>
            <HashLink
              className="font-bold md:py-4 relative before:absolute before:bottom-2 md:before:left-0 md:before:bg-cyan-400 md:before:w-0 md:before:h-[2px] md:before:hidden md:hover:before:block md:hover:before:w-full"
              to="#about"
              smooth
            >
              About Me
            </HashLink>
            <HashLink
              className="font-bold md:py-4 relative before:absolute before:bottom-2 md:before:left-0 md:before:bg-cyan-400 md:before:w-0 md:before:h-[2px] md:before:hidden md:hover:before:block md:hover:before:w-full"
              to="#blog"
              smooth
            >
              Blog
            </HashLink>
            <HashLink
              className="font-bold md:py-4 relative before:absolute before:bottom-2 md:before:left-0 md:before:bg-cyan-400 md:before:w-0 md:before:h-[2px] md:before:hidden md:hover:before:block md:hover:before:w-full"
              to="#contact"
              smooth
            >
              Contact
            </HashLink>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
