import Container from "../../components/Container";
import SectionBg from "../../components/SectionBg";
import SectionTitle from "../../components/SectionTitle";
import { COMPANIES } from "../../constants/data";
import GlobalContext from "../../context/GlobalContext";
import { motion as m } from "framer-motion";
import "./index.scss";
function Companies() {
  const { lan } = GlobalContext();
  const styleHelper = ["I", "II", "III", "VI"];
  const arr = [
    "assets/1.jpg",
    "assets/2.jpg",
    "assets/3.jpg",
    "assets/logo2.png",
  ];
  let count = 0;
  return (
    <div className="py-20 relative companies" id="companies">
      <SectionBg src="assets/33.jpg" opacity="opacity-60" />
      <Container>
        <SectionTitle title={COMPANIES[lan].title} />
        <div className="flex mt-10">
          <div className="all w-[600px] border rounded-full aspect-square flex justify-center items-center relative">
            <m.div
              className="animate_pattern_i rounded-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] border-4 border-y-main border-x-transparent"
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
              className="animate_pattern_i rounded-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] border-4 border-y-alt border-x-transparent"
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
              {arr.map((company, index) => (
                <div
                  className={`image absolute rounded-full overflow-hidden w-24 bg-white flex justify-center items-center text-xl aspect-square`}
                  key={index}
                  id={`image${styleHelper[count++]}`}
                  // onClick={() => {
                  //   setActive(person._id);
                  //   setPersonDetails(undefined);
                  //   setTimeout(() => {
                  //     setPersonDetails(person);
                  //   }, 300);
                  // }}
                >
                  <img src={company} className="object-contain" width="60" />
                </div>
              ))}
            </div>
            {/* {personDetails && (
            <m.div
              className="flex-column centering-content g-1 absolute l-50 t-50 translate-50 person_details"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
            >
              <div className="image overflow-hidden radius-m">
                {personDetails.image && (
                  <CoolImage
                    thumb={``}
                    height={120}
                    width={120}
                    type="team"
                    // url={`https://taleb-restaurant-api.onrender.com/assets/${personDetails?.image.trim()}`}
                    url={`http://localhost:3500/assets/${personDetails?.image.trim()}`}
                  />
                )}
              </div>
              <h4 className="name cl-khaled capitalize">
                {personDetails?.name}
              </h4>
              <p className="cl-t2 details letter-s-1 txt-c fs-small">
                {personDetails?.jobTitle}
              </p>
              <div className="flex align-center g-1 social">
                {personDetails.social?.map((icon) => (
                  <m.div
                    className="flex cl-t2 p-1 pointer radius-s icon"
                    key={socialIcons[`${icon.name}`].color}
                    style={{
                      backgroundColor: "#ccc",
                    }}
                    whileHover={{
                      backgroundColor: socialIcons[`${icon.name}`].color,
                      color: "#fff",
                    }}
                  >
                    {socialIcons[`${icon.name}`].icon}
                  </m.div>
                ))}
              </div>
            </m.div>
          )} */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <img src="assets/logo.png" alt="" width={150} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Companies;
