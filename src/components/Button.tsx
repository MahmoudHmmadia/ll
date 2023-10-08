import { motion } from "framer-motion";
import { ReactNode } from "react";
import { IconType } from "react-icons/lib";
import { NavLink } from "react-router-dom";

type props = {
  children: ReactNode;
  bg?: string;
  Icon?: IconType;
  animate?: boolean;
  link?: boolean;
  path?: string;
};
function Button({
  children,
  bg = "bg-main",
  Icon,
  animate,
  link,
  path,
}: props) {
  const STYLE = `py-3 px-4 transition-all tracking-wide font-bold ${bg} uppercase border border-main text-black w-full rounded-xl flex items-center gap-2 justify-center hover:bg-black hover:text-main hover:scale-90 `;
  return (
    <>
      {link && path ? (
        <NavLink to={path} className={STYLE}>
          <span>{children}</span>
          {animate && Icon && (
            <motion.span
              initial={{
                x: 0,
              }}
              animate={{
                x: 5,
                transition: {
                  repeat: Infinity,
                  duration: 0.75,
                },
              }}
            >
              <Icon />
            </motion.span>
          )}
        </NavLink>
      ) : (
        <button className={STYLE}>
          <span>{children}</span>
          {animate && Icon && (
            <motion.span
              initial={{
                x: 0,
              }}
              animate={{
                x: 5,
                transition: {
                  repeat: Infinity,
                  duration: 0.75,
                },
              }}
            >
              <Icon />
            </motion.span>
          )}
        </button>
      )}
    </>
  );
}

export default Button;
