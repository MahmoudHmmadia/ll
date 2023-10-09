import { motion as m } from "framer-motion";
import { ReactNode } from "react";
function PageTransition({ children }: { children: ReactNode }) {
  return (
    <m.main
      className=""
      initial={{
        opacity: 0,
        y: -20,
      }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          stiffness: 50,
          type: "spring",
          delay: 0.5,
        },
      }}
      exit={{
        opacity: 0,
        y: -20,
      }}
    >
      {children}
    </m.main>
  );
}

export default PageTransition;
