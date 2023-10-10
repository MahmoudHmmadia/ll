import Container from "../../components/Container";
import SectionBg from "../../components/SectionBg";
import SectionTitle from "../../components/SectionTitle";
import { COMPANIES, useData } from "../../constants/data";
import GlobalContext from "../../context/GlobalContext";
import { motion as m } from "framer-motion";
import "./index.scss";
import { useState } from "react";
function Companies() {
  const { lan } = GlobalContext();
  const styleHelper = ["I", "II", "III", "VI"];
  const arr = [
    "assets/1.png",
    "assets/2.png",
    "assets/3.png",
    "assets/logo2.png",
  ];
  const { companies } = useData();
  let count = 0;
  const [chosenCompany, setCompany] = useState(companies[0]);
  return (
    <div className="py-20 relative companies" id="companies">
      <SectionBg src="assets/33.jpg" opacity="opacity-60" />
      <Container>
        <SectionTitle title={COMPANIES[lan].title} />
        <div className="flex mt-10">
          <div className="all w-[600px] border rounded-full aspect-square flex justify-center items-center relative">
            <m.div
              className="animate_pattern_i rounded-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] border-4 border-y-main border-x-transparent"
              initial={{
                rotate: 0,
                x: "-50%",
                y: "-50%",
              }}
              animate={{
                rotate: 360,
                x: "-50%",
                y: "-50%",
              }}
              transition={{
                duration: 7,
                ease: "linear",
                repeat: Infinity,
              }}
            ></m.div>
            <m.div
              className="animate_pattern_i rounded-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] h-[40%] border-4 border-y-alt border-x-transparent"
              initial={{
                rotate: 0,
                x: "-50%",
                y: "-50%",
              }}
              animate={{
                rotate: 360,
                x: "-50%",
                y: "-50%",
              }}
              transition={{
                duration: 4,
                ease: "linear",
                repeat: Infinity,
              }}
            ></m.div>
            <div className="companies relative w-full h-full flex justify-center items-center cursor-pointer flex-1 left-1/2">
              <div className="image absolute rounded-full overflow-hidden"></div>
              {companies.map((company, index) => (
                <div
                  className={`image absolute rounded-full overflow-hidden w-24 border bg-gray-200 flex justify-center items-center text-xl aspect-square`}
                  key={index}
                  id={`image${styleHelper[count++]}`}
                  style={{
                    boxShadow:
                      company.name == chosenCompany.name
                        ? "0 0 0 6px #000, 0 0 0 12px #cca756 "
                        : "",
                  }}
                  onClick={() => {
                    setCompany(company);
                  }}
                >
                  <img
                    src={company.image}
                    className="object-contain"
                    width="60"
                  />
                </div>
              ))}
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <img src="assets/logo.png" alt="" width={150} />
            </div>
          </div>
          <div className="flex flex-col gap-4 items-center flex-1 uppercase">
            <div
              className={`sm:text-3xl text-xl w-fit text-white flex flex-col relative gap-1 text-center lg:text-start`}
            >
              <span>{chosenCompany.name}</span>
              <span className="relative">
                <span
                  className={`absolute h-1 left-1/2 -translate-x-1/2 lg:w-1/3 w-1/2   -bottom-2 bg-main`}
                ></span>
              </span>
            </div>
            <img src={chosenCompany.image} alt="" width={100} />
            <p className="text-zinc-300">{chosenCompany.time}</p>
            <p className="text-zinc-300">{chosenCompany.address}</p>
            <p className="text-zinc-300">{chosenCompany.phone}</p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Companies;
