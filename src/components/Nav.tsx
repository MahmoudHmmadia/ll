import { NavLink, useParams } from "react-router-dom";
import Container from "./Container";
import { Sling as Hamburger } from "hamburger-react";
import GlobalContext from "../context/GlobalContext";
import { ABOUT, COMPANIES, CONTACT, HOME, WORKS } from "../constants/data";
import ToggleLan from "./ToggleLan";
import { useState } from "react";
export const Nav = () => {
  const { lan } = GlobalContext();
  const { workId } = useParams();
  const [open, setOpen] = useState(false);
  const MOBILE_STYLE = `"items-center justify-center uppercase gap-6 flex absolute w-full h-full left-0 transition-all ${
    open ? "top-0" : "-top-full"
  } `;
  return (
    <nav className="py-6 z-50">
      <Container>
        <div className="flex justify-between items-center gap-5">
          <NavLink to={"/"} className="logo flex-1">
            <img
              src="/assets/logo.png"
              alt=""
              className="sm:w-[100px] w-[80px]"
            />
          </NavLink>
          {!workId && (
            <ul
              className={`"uppercase sm:gap-6 flex sm:text-base text-lg uppercase sm:relative absolute left-0 sm:w-auto w-full sm:h-auto h-screen sm:bg-transparent transition-all sm:transition-none duration-500 bg-black bg-opacity-90 sm:flex-row flex-col z-30 justify-center gap-10 sm:justify-start sm:items-start items-center ${
                !open ? "-top-[1100%]" : "-top-6"
              } `}
            >
              <img
                src="assets/logo.png"
                width={150}
                className="sm:hidden flex"
                alt=""
              />
              <a
                href="#about"
                className="nav-link hover:text-main transition"
                onClick={() => setOpen(false)}
              >
                {ABOUT[lan].title}
              </a>
              <a
                href="#works"
                className="nav-link hover:text-main transition"
                onClick={() => setOpen(false)}
              >
                {WORKS[lan].title}
              </a>
              <a
                href="#companies"
                className="nav-link hover:text-main transition"
                onClick={() => setOpen(false)}
              >
                {COMPANIES[lan].title}
              </a>
              <a
                href="#contact"
                className="nav-link hover:text-main transition"
                onClick={() => setOpen(false)}
              >
                {CONTACT[lan].title}
              </a>
            </ul>
          )}

          <div className="flex items-center gap-5 z-30">
            <div className="relative   -order-1">
              <span className="opacity-0"> a</span>
              <span className="absolute left-1/2 -translate-x-1/2 h-full w-[2px] bg-white"></span>
            </div>
            <ToggleLan />
            <div className="sm:hidden flex cursor-pointer text-main z-30">
              <Hamburger
                duration={0.3}
                size={25}
                toggle={setOpen}
                toggled={open}
              />
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
};
