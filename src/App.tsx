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
import Training from "./pages/trainning";
import { useEffect } from "react";
import { Peer } from "peerjs";
export const App = () => {
  const { lan } = GlobalContext();
  const location = useLocation();
  useEffect(() => {
    const myPeer = new Peer({
      host: "meet-joybox.com",
      secure: true,
      debug: 3,
      config: {
        iceServers: [
          {
            urls: "stun:stun.relay.metered.ca:80",
          },
          {
            urls: "turn:a.relay.metered.ca:80",
            username: "976776674d5e26c0b97dd685",
            credential: "dqwWyHCY+eCXcn8I",
          },
          {
            urls: "turn:a.relay.metered.ca:80?transport=tcp",
            username: "976776674d5e26c0b97dd685",
            credential: "dqwWyHCY+eCXcn8I",
          },
          {
            urls: "turn:a.relay.metered.ca:443",
            username: "976776674d5e26c0b97dd685",
            credential: "dqwWyHCY+eCXcn8I",
          },
          {
            urls: "turn:a.relay.metered.ca:443?transport=tcp",
            username: "976776674d5e26c0b97dd685",
            credential: "dqwWyHCY+eCXcn8I",
          },
        ],
      },
    });
  }, []);
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
        </Routes>
      </AnimatePresence>
    </div>
  );
};
