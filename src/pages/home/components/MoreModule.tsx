import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { ABDALHAMED } from "../../../constants/data";
import GlobalContext from "../../../context/GlobalContext";
import SectionTitle from "../../../components/SectionTitle";
import MyText from "../../../components/MyText";
import { Dispatch, SetStateAction } from "react";
import { AltButton } from "../../../components/button/AltButton";
function MoreModule({ toggle }: { toggle: Dispatch<SetStateAction<boolean>> }) {
  const { lan } = GlobalContext();
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full z-30 bg-black opacity-80"></div>
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper fixed top-32 lg:w-6/12 justify-center bg-alt bg-opacity-60 md:w-6/12 w-9/12 left-1/2 -translate-x-1/2 z-30 "
      >
        {ABDALHAMED[lan].map((item) => (
          <SwiperSlide
            key={item.title}
            className="flex flex-col gap-3 p-10 justify-center items-center my-auto"
          >
            <SectionTitle title={item.title} />
            <MyText content={item.info} delay={0} center />
          </SwiperSlide>
        ))}
        <div className="pb-2 px-2 text-sm w-9/12 m-auto">
          <AltButton
            content={lan === "ar" ? "الرجوع للوراء" : "return back"}
            outline=""
            altColor="text-main"
            bgColor="bg-main"
            clickFunction={() => toggle(false)}
            button_circle_bg_color="bg-black"
            color="text-black"
          />
        </div>
      </Swiper>
    </>
  );
}

export default MoreModule;
