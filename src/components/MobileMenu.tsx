import { NavLink } from "react-router-dom";
import { ABOUT, COMPANIES, HOME, WORKS } from "../constants/data";
import GlobalContext from "../context/GlobalContext";

function MobileMenu({ open }: { open: boolean }) {
  const { lan } = GlobalContext();
  return (
    <ul
      className={`"items-center justify-center uppercase gap-6 flex absolute w-full h-full left-0 transition-all ${
        open ? "top-0" : "-top-full"
      } `}
    >
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
  );
}

export default MobileMenu;
