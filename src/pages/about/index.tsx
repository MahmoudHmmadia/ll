import { motion } from "framer-motion";
import Container from "../../components/Container";
import SectionTitle from "../../components/SectionTitle";
import "swiper/css";
import "swiper/css/effect-cards";
import GlobalContext from "../../context/GlobalContext";
import { ABOUT } from "../../constants/data";
import Overlay from "../../components/Overlay";
import { AltButton } from "../../components/button/AltButton";
import CoolImage from "../../components/CoolImage";
import SectionBg from "../../components/SectionBg";
import MyText from "../../components/MyText";

function About() {
  const { lan } = GlobalContext();
  return (
    <div className="overflow-hidden about bg-gradient_main" id="about">
      <div className="relative overflow-hidden pt-24 ">
        <SectionBg src="assets/22.jpg" opacity="opacity-100" />
        <div className="absolute w-full h-full top-0 left-0 bg-gradient_main opacity-60 z-10"></div>
        <div className="absolute left-0 bottom-0 opacity-60 z-10">
          <img src="assets/sketch.png" alt="" width={900} />
        </div>
        <Container>
          <div className="flex flex-col gap-8">
            <SectionTitle title={ABOUT[lan].title} />
            <div className="flex justify-center items-center gap-8 lg:gap-10 mb-60 lg:flex-row flex-col ">
              <div className="flex flex-col gap-6 lg:max-w-[700px] w-full flex-1 relative z-20 lg:pr-10 lg:py-10 order-1 lg:-order-1">
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
                    {ABOUT[lan].company}
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
                      className={`absolute h-1 lg:left-0 lg:translate-x-0 left-1/2 -translate-x-1/2 lg:w-1/3 w-1/2 ${
                        lan == "ar" ? "right-0" : "left-0"
                      } -bottom-2 bg-main`}
                    ></span>
                  </motion.span>
                </div>
                <MyText content={ABOUT[lan].info} delay={1} />
              </div>
              <div className="logo_container p-10 bg-alt rounded-full relative aspect-square w-[300px] h-[300px] flex justify-center items-center z-10">
                <motion.img
                  src="assets/logo.png"
                  alt=""
                  width={400}
                  whileInView={{
                    x: [200, 0],
                    opacity: [0, 1],
                    transition: {
                      duration: 0.75,
                      ease: "easeInOut",
                    },
                  }}
                />
                <Overlay />
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="relative pb-24 pt-24">
        <SectionBg src="assets/55.jpg" opacity="opacity-100" />
        <div className="absolute w-full h-full top-0 left-0 bg-gradient_main opacity-60 z-10"></div>
        <Container>
          <div className="flex justify-center items-center gap-8 lg:gap-10 lg:flex-row flex-col">
            <div className="flex lg:flex-col z-10 flex-row justify-center gap-10 items-center">
              <motion.div
                whileInView={{
                  x: [-200, 0],
                  opacity: [0, 1],
                  transition: {
                    duration: 0.75,
                    ease: "easeInOut",
                  },
                }}
                className="lg:w-[400px] md:w-[300px] relative"
              >
                <CoolImage
                  src="assets/training1.png"
                  width="lg:w-[400px] md:w-[300px]"
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
                className="lg:w-[400px] md:w-[300px] relative"
              >
                <div className="absolute w-full h-full left-0 top-0 bg-alt z-10 opacity-20"></div>
                <div className="absolute w-full h-full border-4 border-main -left-5 -bottom-5"></div>
                <img src="assets/training2.png" className="relative" alt="" />
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
                color="text-black "
              />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default About;
