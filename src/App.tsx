import { useTranslation } from "react-i18next";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Works from "./pages/works";
import Work from "./pages/work";
import { AnimatePresence } from "framer-motion";
import { motion as m } from "framer-motion";
import GlobalContext from "./context/GlobalContext";
export const App = () => {
  const { lan } = GlobalContext();
  const location = useLocation();
  return (
    <div
      className={`flex flex-col gap-3 bg-gradient_main text-white overflow-hidden ${
        lan === "ar" ? "rtl" : ""
      }`}
    >
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <m.main
                className="flex flex-col"
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
                <Home />
                <About />
                <Works />
              </m.main>
            }
          />
          <Route path="/:workId" element={<Work />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};
