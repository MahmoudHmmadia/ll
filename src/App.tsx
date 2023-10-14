import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Works from "./pages/works";
import Work from "./pages/work";
import { AnimatePresence } from "framer-motion";
import { motion as m } from "framer-motion";
import GlobalContext from "./context/GlobalContext";
import PageTransition from "./components/PageTransition";
import Contact from "./pages/contact";
import Companies from "./pages/companies";
import Footer from "./components/Footer";
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
              <PageTransition>
                <main className="flex flex-col">
                  <Home />
                  <About />
                  <Works />
                  <Companies />
                  {/* <Contact /> */}
                  <Footer />
                </main>
              </PageTransition>
            }
          />
          <Route path="/:workId" element={<Work />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};
