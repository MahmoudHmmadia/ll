import { useState } from "react";
import { AltButton } from "../../components/button/AltButton";
import MyText from "../../components/MyText";
import { ABOUT } from "../../constants/data";
import GlobalContext from "../../context/GlobalContext";
import SectionBg from "../../components/SectionBg";
import Container from "../../components/Container";
import { motion } from "framer-motion";
import CoolImage from "../../components/CoolImage";
import RegisterModel from "../about/components/RegisterModel";
import SectionTitle from "../../components/SectionTitle";

function Training() {
  const { lan } = GlobalContext();
  const [showenModel, setShowenModel] = useState(false);
  return (
    <div className="relative pb-24 pt-24">
      {showenModel && <RegisterModel fn={setShowenModel} />}
      <SectionBg src="assets/55.jpg" opacity="opacity-100" />
      <Container>
        <SectionTitle title={ABOUT[lan].trainingTitle} />
        <div className="flex justify-center items-center gap-8 lg:gap-10 lg:flex-row flex-col mt-6">
          <div className="flex flex-col z-10  justify-center gap-10 items-center lg:w-auto w-full">
            <motion.div
              whileInView={{
                x: [-200, 0],
                opacity: [0, 1],
                transition: {
                  duration: 0.75,
                  ease: "easeInOut",
                },
              }}
              className="w-full flex justify-end "
            >
              <CoolImage
                src="assets/training1.png"
                width="lg:w-[400px] md:w-[300px] w-[200px] aspect-[2/1]"
              />
            </motion.div>
            <motion.div
              whileInView={{
                x: [-200, 0],
                opacity: [0, 1],
                transition: {
                  duration: 0.75,
                  ease: "easeInOut",
                },
              }}
              className="w-full flex"
            >
              <CoolImage
                src="assets/training2.png"
                width="lg:w-[400px] md:w-[300px] w-[200px] aspect-[2/1]"
              />
            </motion.div>
          </div>
          <div className="flex flex-col gap-6 lg:max-w-[700px] w-full flex-1 relative z-20 lg:pr-10 pr-0 py-10">
            <div
              className={`sm:text-3xl text-xl w-fit text-white flex flex-col relative gap-1 text-center lg:text-start ${
                lan === "ar" ? "lg:ml-auto lg:m-0 m-auto" : "lg:m-0 m-auto"
              }`}
            >
              <motion.span
                whileInView={{
                  y: [20, 0],
                  opacity: [0, 1],
                  transition: {
                    delay: 0.2,
                    duration: 0.4,
                    type: "spring",
                    stiffness: 100,
                  },
                }}
              >
                {ABOUT[lan].trainingTitle}
              </motion.span>
              <motion.span
                whileInView={{
                  y: [20, 0],
                  opacity: [0, 1],
                  transition: {
                    delay: 0.6,
                    duration: 0.4,
                    type: "spring",
                    stiffness: 100,
                  },
                }}
                className="relative"
              >
                <span
                  className={`absolute h-1  lg:left-0 lg:translate-x-0 left-1/2 -translate-x-1/2 lg:w-1/3 w-1/2 ${
                    lan == "ar" ? "right-0" : "left-0"
                  } -bottom-2 bg-main`}
                ></span>
              </motion.span>
            </div>
            <MyText content={ABOUT[lan].trainingInfo} delay={1} />
            <AltButton
              content={`${lan == "en" ? "register" : "تسجيل"}`}
              outline=""
              altColor="text-main"
              bgColor="bg-main"
              button_circle_bg_color="bg-black"
              color="text-black"
              clickFunction={() => setShowenModel(true)}
            />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Training;
