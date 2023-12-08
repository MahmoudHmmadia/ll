import Container from "../../components/Container";
import SectionTitle from "../../components/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { WORKS, useData } from "../../constants/data";
import Button from "../../components/Button";
import { BsArrowRight } from "react-icons/bs";
import GlobalContext from "../../context/GlobalContext";
import CoolImage from "../../components/CoolImage";
import SectionBg from "../../components/SectionBg";
import MyText from "../../components/MyText";
import WorkNav from "./components/WorkNav";
import { AiTwotoneAppstore } from "react-icons/ai";
import { useState } from "react";
function Works() {
  const { works } = useData();
  const { lan } = GlobalContext();
  const [isShowen, setIsShowen] = useState(false);
  return (
    <div className="py-20 relative works" id="works">
      <SectionBg src="assets/44.jpg" opacity="opacity-30" />
      <div className="absolute left-0 top-30 w-[700px] h-full opacity-60 ">
        <img src="assets/aaa.png" alt="" className="object-cover" />
      </div>
      <Container>
        <div className="flex flex-col gap-8 items-center">
          <SectionTitle title={WORKS[lan].title} />
          <MyText content={WORKS[lan].info} delay={0.2} med center />
          <div className="relative w-full flex justify-center">
            <div
              className="absolute lg:hidden flex text-main text-3xl left-0 cursor-pointer"
              onClick={() => {
                setIsShowen(!isShowen);
              }}
            >
              <AiTwotoneAppstore />
            </div>
            <WorkNav isShowen={isShowen} setIsShowen={setIsShowen} />
          </div>
          <Swiper
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            pagination={true}
            autoplay={{
              disableOnInteraction: false,
            }}
            speed={500}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
            breakpoints={{
              1024: {
                spaceBetween: 80,
                slidesPerView: 3,
              },

              767: {
                spaceBetween: 80,
                slidesPerView: 2,
              },
              200: {
                slidesPerView: 1,
                spaceBetween: 100,
              },
            }}
          >
            {works.map((work) => (
              <SwiperSlide
                key={work.title}
                className="relative m-0 md:p-0 flex flex-col gap-24 items-center"
                style={{
                  marginRight: "100px",
                }}
              >
                <CoolImage
                  src={work.imgSrc1}
                  width=" w-[200px] sm:w-[300px] aspect-[1/1.3]"
                >
                  <span className="absolute left-0 top-10 text-black text-lg text-center bg-opacity-70 uppercase w-full bg-main p-2 flex justify-center items-center flex-col">
                    <span className="sm:text-base text-xs">{work.title}</span>
                    <span className="sm:text-3xl text-xl text-black">
                      {work.country}
                    </span>
                  </span>
                </CoolImage>
                <div className="w-auto m-auto text-sm">
                  <Button Icon={BsArrowRight} animate link path={work.id}>
                    {WORKS[lan].btn}
                  </Button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </div>
  );
}

export default Works;
