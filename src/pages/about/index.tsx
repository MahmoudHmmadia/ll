import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Container from "../../components/Container";
import SectionTitle from "../../components/SectionTitle";
import AboutBox from "./components/AboutBox";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import GlobalContext from "../../context/GlobalContext";
import { ABOUT } from "../../constants/data";
import Shape from "../../components/Shape";
import Overlay from "../../components/Overlay";
import { AltButton } from "../../components/button/index";

function About() {
  const variant = {
    hidden: { x: 100 },
    visible: { x: 0 },
  };
  const control = useAnimation();
  const [ref, inView] = useInView();
  const { lan } = GlobalContext();
  return (
    <div className="overflow-hidden about bg-gradient_main">
      <div
        className="relative overflow-hidden pt-24 bg-cover"
        style={{
          backgroundImage: "url('assets/bg2.jpg')",
        }}
      >
        <div className="absolute w-full h-full top-0 left-0 bg-gradient_main opacity-90 z-10"></div>
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
                <motion.p
                  whileInView={{
                    y: [20, 0],
                    opacity: [0, 1],
                    transition: {
                      delay: 1,
                      duration: 0.4,
                      type: "spring",
                      stiffness: 100,
                    },
                  }}
                  className="relative sm:text-sm text-xs uppercase tracking-wide text-gray-200 text-center lg:text-start"
                >
                  {ABOUT[lan].info}
                </motion.p>
              </div>
              <div className="logo_container p-10 bg-alt rounded-full relative aspect-square w-[300px] h-[300px] flex justify-center items-center">
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

            {/* <div className="flex items-center gap-20 justify-center">
            <div className="w-full md:w-8/12 lg:w-[40%]">
              <Swiper
                effect={"cards"}
                centeredSlides={true}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
                loop={true}
              >
                <SwiperSlide className="bg-black shadow-2xl w-[250]px md:w-[300px] lg:w-[300px]">
                  <AboutBox
                    content={ABOUT[lan].infoI}
                    title={ABOUT[lan].titleI}
                    imageSrc="/assets/ab.png"
                  />
                </SwiperSlide>
                <SwiperSlide className="bg-alt w-250px md:w-[300px] lg:w-[400px] self-stretch">
                  <AboutBox
                    content={ABOUT[lan].infoII}
                    title={ABOUT[lan].titleII}
                    imageSrc="/assets/abb.png"
                  />
                </SwiperSlide>
                <SwiperSlide className="bg-main  w-250px md:w-[300px] lg:w-[400px] self-stretch">
                  <AboutBox
                    content={ABOUT[lan].infoIII}
                    title={ABOUT[lan].titleIII}
                    imageSrc="assets/ab.png"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="flex-col gap-10 items-center md:flex hidden">
              <img src="assets/logo.png" width={300} alt="" />
              <div className="image">
                <img src="assets/abouttt.png" width={500} alt="" />
              </div>
            </div>
          </div> */}
          </div>
        </Container>
      </div>
      <div
        className="relative pb-24 pt-24 bg-cover"
        style={{
          backgroundImage: 'url("assets/bg3.jpg")',
        }}
      >
        {/* <div className="absolute w-full h-full left-0 top-0 bg-right bg-contain bg-no-repeat lg:flex hidden opacity-20"></div> */}
        {/* <div className="absolute top-1/2 -translate-y-1/2 right-10">
          <Shape />
        </div> */}
        <motion.div
          className="absolute opacity-40 bottom-0 left-0 sm:w-[500px] w-[400px]"
          initial={{
            y: 0,
          }}
          animate={{
            y: -50,
            transition: {
              repeat: Infinity,
              duration: 4,
              repeatType: "reverse",
            },
          }}
        >
          <img
            src="assets/about_item.png"
            alt=""
            className="w-full h-full object-cover z-10"
          />
        </motion.div>
        <div className="absolute w-full h-full top-0 left-0 bg-gradient_main opacity-90 z-10"></div>
        <Container>
          <div className="flex justify-center items-center gap-8 lg:gap-10 lg:flex-row flex-col">
            <div className="flex lg:flex-col flex-row justify-center gap-10 items-center">
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
                <div className="absolute w-full h-full border-4 border-main -left-5 -bottom-5"></div>
                <div className="absolute w-full h-full left-0 top-0 bg-alt z-10 opacity-20"></div>
                <img src="assets/training1.png" alt="" className="relative" />
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
              <motion.p
                whileInView={{
                  y: [20, 0],
                  opacity: [0, 1],
                  transition: {
                    delay: 1,
                    duration: 0.4,
                    type: "spring",
                    stiffness: 100,
                  },
                }}
                className="relative sm:text-sm text-xs uppercase tracking-wide text-gray-200 text-center lg:text-start"
              >
                {ABOUT[lan].trainingInfo}
              </motion.p>
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
