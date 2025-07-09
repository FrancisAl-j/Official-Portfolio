import { Link } from "react-router-dom";
import Menu from "../assets/menu.svg";
import Close from "../assets/close.svg";
import { useState } from "react";

const Nav = () => {
  const [isShow, setIsShow] = useState(false);

  const showMenu = () => {
    setIsShow(true);
  };

  const closeMenu = () => {
    setIsShow(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full pt-2 z-50">
      <nav className="main-container glass flex justify-between text-white items-center p-2 relative">
        <Link to="/">
          <h1 className="text-3xl lg:text-5xl font-extrabold">
            {"<"}Francis {"/>"}
          </h1>
        </Link>

        <ul
          className={`block md:flex gap-5 absolute md:static ${
            isShow ? "top-0" : "top-[-350%]"
          } left-0 bg-purple-950 md:bg-transparent w-full md:w-auto p-4 md:p-0`}
        >
          <img
            src={Close}
            onClick={closeMenu}
            alt=""
            className="aspect-square w-10 block md:hidden ml-auto"
          />
          <Link to="/">
            <li
              onClick={closeMenu}
              className="text-xl block text-center p-4 md:p-0"
            >
              Home
            </li>
          </Link>

          <Link to="/projects">
            <li
              onClick={closeMenu}
              className="text-xl block text-center p-4 md:p-0"
            >
              Projects
            </li>
          </Link>

          <a href="#contact">
            <li
              onClick={closeMenu}
              className="text-xl block text-center p-4 md:p-0"
            >
              Contact
            </li>
          </a>
        </ul>

        <img
          src={Menu}
          onClick={showMenu}
          alt=""
          className="aspect-square w-14 block md:hidden"
        />
      </nav>
    </header>
  );
};

export default Nav;
