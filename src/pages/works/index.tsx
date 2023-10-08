import { useTranslation } from "react-i18next";
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
import { motion } from "framer-motion";
function Works() {
  const { t } = useTranslation();
  const { works } = useData();
  const { lan } = GlobalContext();
  return (
    <div className="py-20 relative works">
      <div className="absolute left-0 top-0 w-full h-full opacity-20">
        <img src="assets/works.png" alt="" className="object-cover" />
      </div>
      <Container>
        <div className="flex flex-col gap-8">
          <SectionTitle title={WORKS[lan].title} />
          <motion.p
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
            className="info tracking-wide sm:text-sm text-xs uppercase text-center text-gray-200"
          >
            {WORKS[lan].info}
          </motion.p>
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
                spaceBetween: 30,
                slidesPerView: 2,
              },
              200: {
                spaceBetween: 30,
                slidesPerView: 1,
              },
            }}
          >
            {works.map((work) => (
              <SwiperSlide
                key={work.title}
                className="relative p-5 md:p-0 flex flex-col gap-24"
              >
                <div className="image relative lg:w-auto w-[300px] flex aspect-[1/1.3] m-auto max-w-[350px]">
                  <div className="image_container relative w-full h-full">
                    <img
                      src={work.imgSrc1}
                      alt={work.title}
                      className="object-contain relative h-full w-full"
                    />
                    <div className="absolute w-full h-full left-0 top-0 bg-alt opacity-30 z-10"></div>
                    <div className="absolute -z-10 w-full h-full border-main border-4 -left-6 top-6"></div>
                  </div>
                  <span className="absolute left-0 top-10 text-black text-lg text-center font-extrabold bg-opacity-70 uppercase w-full bg-main p-2 flex justify-center items-center flex-col">
                    <span>{work.title}</span>
                    <span className="cool tracking-widest text-3xl text-black">
                      {work.country}
                    </span>
                  </span>
                </div>
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
