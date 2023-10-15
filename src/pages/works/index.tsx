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
function Works() {
  const { works } = useData();
  const { lan } = GlobalContext();
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
          <ul className="flex items-center flex-wrap justify-center">
            {WORKS[lan].nav.map((li) => (
              <li
                className={`uppercase p-4 bg-black bg-opacity-60 text-xs  sm:text-sm cursor-pointer hover:bg-main hover:text-black transition-all ${
                  (li === "all" || li === "الكل") &&
                  "bg-main bg-opacity-100 text-black"
                }`}
                key={li}
              >
                {li}
              </li>
            ))}
          </ul>
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
                slidesPerView: 2,
              },
              200: {
                slidesPerView: 1,
              },
            }}
          >
            {works.map((work) => (
              <SwiperSlide
                key={work.title}
                className="relative m-0 md:p-0 flex flex-col gap-24"
                style={{
                  marginRight: "20px",
                }}
              >
                <CoolImage
                  src={work.imgSrc1}
                  width="lg:w-auto w-[300px] aspect-[1/1.3] m-auto"
                >
                  <span className="absolute left-0 top-10 text-black text-lg text-center bg-opacity-70 uppercase w-full bg-main p-2 flex justify-center items-center flex-col">
                    <span>{work.title}</span>
                    <span className=" text-3xl text-black">{work.country}</span>
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
