import { useTranslation } from "react-i18next";
import { NavLink, useParams } from "react-router-dom";
import Container from "./Container";
import { BsGlobeEuropeAfrica } from "react-icons/bs";
import { Sling as Hamburger } from "hamburger-react";
import GlobalContext from "../context/GlobalContext";
import Home from "../pages/home";
import { ABOUT, COMPANIES, HOME, WORKS } from "../constants/data";
import ToggleLan from "./ToggleLan";
export const Nav = () => {
  const { lan } = GlobalContext();
  const { workId } = useParams();
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
            <ul className="items-center uppercase gap-6 sm:flex hidden">
              <NavLink to="/" className="nav-link hover:text-main transition">
                {HOME[lan].title}
              </NavLink>
              <NavLink to="/" className="nav-link hover:text-main transition">
                {ABOUT[lan].title}
              </NavLink>
              <NavLink to="/" className="nav-link hover:text-main transition">
                {WORKS[lan].title}
              </NavLink>
              <NavLink to="/" className="nav-link hover:text-main transition">
                {COMPANIES[lan].title}
              </NavLink>
            </ul>
          )}

          <div className="flex items-center gap-5">
            <div className="relative   -order-1">
              <span className="opacity-0"> a</span>
              <span className="absolute left-1/2 -translate-x-1/2 h-full w-[2px] bg-white"></span>
            </div>
            <ToggleLan />
            <div className="sm:hidden flex cursor-pointer text-main">
              <Hamburger duration={0.3} size={25} />
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
};
