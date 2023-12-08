import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Works from "./pages/works";
import Work from "./pages/work";
import { AnimatePresence } from "framer-motion";
import GlobalContext from "./context/GlobalContext";
import PageTransition from "./components/PageTransition";
import Companies from "./pages/companies";
import Footer from "./components/Footer";
import { Helmet } from "react-helmet";
import Training from "./pages/training";

export const App = () => {
  const { lan } = GlobalContext();

  const location = useLocation();

  return (
    <>
      <Helmet>
        <link rel="icon" href={"assets/logo2.png"} />
      </Helmet>
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
                    <Works />
                    <Training />
                    <About />
                    <Companies />
                    <Footer />
                  </main>
                </PageTransition>
              }
            />
            <Route path="/:workId" element={<Work />} />
            <Route path="/*" element={<Navigate to={"/"} />} />
          </Routes>
        </AnimatePresence>
      </div>
    </>
  );
};
