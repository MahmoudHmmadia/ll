import Container from "../../components/Container";
import { Nav } from "../../components/Nav";
import { AltButton } from "../../components/button/index";
import { motion as m } from "framer-motion";
import GlobalContext from "../../context/GlobalContext";
import { HOME } from "../../constants/data";
function Home() {
  const { lan } = GlobalContext();
  return (
    <div
      className="h-full bg-cover relative min-h-screen pb-24"
      style={{
        backgroundImage: "url('assets/landing.png')",
      }}
    >
      <div className="absolute left-0 bg-gradient_main top-0 w-full h-full opacity-80">
        {/* <img src="assets/landing.png" className="object-contain" alt="" /> */}
      </div>
      <Nav />
      <Container>
        <div className="flex items-center gap-2 lg:flex-row flex-col">
          <div className="relative lg:pl-20 pl-0">
            <m.div
              className="absolute lg:left-[60%] left-1/2 z-10 bottom-0 -translate-x-1/2 rounded-full sm:w-[340px] sm:h-[340px] bg-alt w-[250px] h-[250px]"
              initial={{
                backgroundColor: "#e1cc7b",
              }}
              animate={{
                backgroundColor: "#520e0c",
                transition: {
                  duration: 7,
                },
              }}
            ></m.div>
            <m.div
              className="absolute -left-[11%] top-[12%] opacity-70"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
                transition: {
                  duration: 1,
                },
              }}
            >
              <img
                src="assets/pt.png"
                className="object-contain"
                width={300}
                alt=""
              />
            </m.div>
            <m.img
              initial={{
                opacity: 0,
                y: 100,
              }}
              animate={{
                y: 0,
                opacity: 1,
                transition: {
                  delay: 1.2,
                  duration: 0.8,
                },
              }}
              src="/assets/fadel.png"
              className="relative z-20 sm:w-[400px] w-[300px]"
              alt=""
            />
          </div>
          <div className="flex flex-col relative m-auto gap-4 flex-1 items-center">
            <m.h1
              className="text-main cool uppercase sm:text-6xl text-4xl  font-bold text-center"
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 2,
                  type: "spring",
                  stiffness: 70,
                },
              }}
            >
              {HOME[lan].name}
            </m.h1>
            <m.div
              className="sm:w-[200px] w-[150px]"
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 2.2,
                  type: "spring",
                  stiffness: 70,
                },
              }}
            >
              <img src="assets/ptt.png" alt="ptt" />
            </m.div>
            <m.p
              className={`sm:text-4xl text-2xl text-white text-animate font-extrabold cool tracking-wider uppercase text-center  ${
                lan === "en" && "stroke"
              }`}
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 2.4,
                  type: "spring",
                  stiffness: 70,
                },
              }}
            >
              {HOME[lan].info}
            </m.p>
            <m.p
              className="text-zinc-200 tracking-wide sm:text-base text-sm uppercase text-center max-w-[500px]"
              style={{
                lineHeight: "30px",
              }}
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 2.6,
                  type: "spring",
                  stiffness: 70,
                },
              }}
            >
              {HOME[lan].moreInfo}
            </m.p>
            <div className="flex flex-col gap-2 justify-center">
              <m.p
                className="uppercase text-main text-center sm:text-sm text-xs font-bold tracking-widest"
                style={{
                  textShadow: "0 0 2px",
                }}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 2.8,
                    type: "spring",
                    stiffness: 70,
                  },
                }}
              >
                {HOME[lan].inspiration}
              </m.p>
              <m.span
                className="sm:text-sm text-xs tracking-wide ml-auto uppercase font-bold text-zinc-200"
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 3,
                    type: "spring",
                    stiffness: 70,
                  },
                }}
              >
                {HOME[lan].inspirationOwner}
              </m.span>
            </div>
            <m.div
              className="flex gap-4 md:w-8/12 w-full"
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 3.2,
                  type: "spring",
                  stiffness: 70,
                },
              }}
            >
              <AltButton
                altColor="text-main"
                content={HOME[lan].companiesBtn}
                color="text-black"
                button_circle_bg_color="bg-black"
                outline=""
                bgColor="bg-main"
              />
              <AltButton
                content={HOME[lan].aboutBtn}
                altColor="text-black"
                color="text-main"
                outline=""
                button_circle_bg_color="bg-main"
                bgColor="bg-black"
              />
            </m.div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Home;
