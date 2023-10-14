import {
  SiGooglemaps,
  SiFacebook,
  SiInstagram,
  SiTiktok,
} from "react-icons/si";
import MyText from "../../../components/MyText";
import GlobalContext from "../../../context/GlobalContext";
type company = {
  name: string;
  image: string;
  cover: string;
  time: string;
  address: string;
  phone: string;
  facebook: string;
  instagram?: string;
  tiktok?: string;
  google: string;
};

function Company({ company }: { company: company }) {
  const { lan } = GlobalContext();
  return (
    <div
      key={company.name}
      className={`flex flex-col p-4 uppercase bg-[#a5a4a4] bg-opacity-10 relative ${
        company.cover === "assets/company1-cover.jpg" && "lg:-translate-y-10"
      }`}
      style={{
        boxShadow: "0px 12px 20px 0px #000, 0px 6px 6px 0px #000",
      }}
    >
      {/* <SectionBg src={company.cover} opacity="opacity-20" /> */}
      <div
        className={`absolute left-0 top-0 w-full h-full opacity-20 bg-cover bg-left-bottom  ${
          company.cover == "assets/company-2-cover.jpeg" && "bg-right-bottom"
        }`}
        style={{
          backgroundImage: `url(${company.cover})`,
        }}
      ></div>
      <div
        className={`logo w-full flex justify-center relative ${
          company.name == "ZAN furniture and decoration" && "pt-4"
        }`}
      >
        <img
          src={company.image}
          alt="LOGO"
          width={
            company.name === "das holz kitchens" ||
            company.name === "مطابخ داز هولز"
              ? 100
              : 200
          }
        />
      </div>
      <div className="flex gap-2 flex-1 flex-col justify-end relative">
        <p className={`flex items-center flex-col gap-2 flex-wrap`}>
          <div
            className={`sm:text-lg text-base w-fit text-white flex flex-col relative text-center lg:text-start ${
              lan === "ar" ? "ml-auto" : "mr-auto"
            }`}
          >
            <span>{lan === "ar" ? "الاسم:" : "name:"}</span>
            <span className="relative">
              <span
                className={`absolute -bottom-1 h-[3px]  lg:w-1/3 w-1/2 ${
                  lan == "ar" ? "right-0" : "left-0"
                } -bottom-1 bg-main`}
              ></span>
            </span>
          </div>
          <div className="w-full">
            <p className="tracking-wide uppercase text-sm text-gray-200">
              {company.name}
            </p>
          </div>
        </p>
        <p className={`flex items-center flex-col gap-2 flex-wrap`}>
          <div
            className={`sm:text-lg text-base w-fit text-white flex flex-col relative text-center lg:text-start ${
              lan === "ar" ? "ml-auto" : "mr-auto"
            }`}
          >
            <span>{lan === "ar" ? "العنوان:" : "address:"}</span>
            <span className="relative">
              <span
                className={`absolute -bottom-1 h-[3px] lg:w-1/3 w-1/2 ${
                  lan == "ar" ? "right-0" : "left-0"
                } -bottom-1 bg-main`}
              ></span>
            </span>
          </div>
          <div className="w-full">
            <p className="tracking-wide uppercase text-sm text-gray-200">
              {company.address}
            </p>
          </div>
        </p>
        <p className={`flex items-center flex-col gap-2 flex-wrap`}>
          <div
            className={`sm:text-lg text-base w-fit text-white flex flex-col relative text-center lg:text-start ${
              lan === "ar" ? "ml-auto" : "mr-auto"
            }`}
          >
            <span>{lan === "ar" ? "أوقات العمل:" : "working hours:"}</span>
            <span className="relative">
              <span
                className={`absolute -bottom-1 h-[3px] lg:w-1/3 w-1/2 ${
                  lan == "ar" ? "right-0" : "left-0"
                } -bottom-1 bg-main`}
              ></span>
            </span>
          </div>
          <div className="w-full">
            <p className="tracking-wide  text-sm uppercase text-gray-200">
              {company.time}
            </p>
          </div>
        </p>
        <p className={`flex items-center flex-col gap-2 flex-wrap`}>
          <div
            className={`sm:text-lg text-base w-fit text-white flex flex-col relative text-center lg:text-start ${
              lan === "ar" ? "ml-auto" : "mr-auto"
            }`}
          >
            <span>{lan === "ar" ? "أرقام الهواتف:" : "Phone Numbers:"}</span>
            <span className="relative">
              <span
                className={`absolute -bottom-1 h-[3px] lg:w-1/3 w-1/2 ${
                  lan == "ar" ? "right-0" : "left-0"
                } -bottom-1 bg-main`}
              ></span>
            </span>
          </div>
          <div className="w-full">
            <p className="tracking-wide text-sm uppercase text-gray-200">
              {company.phone}
            </p>
          </div>
        </p>
      </div>
      <div className="w-full h-[1px] mt-4 bg-gray-400"></div>
      <div className="relative mt-4 flex gap-2 justify-center text-sm flex-wrap">
        <div className="p-2 bg-zinc-500 cursor-pointer transition-all hover:bg-[#0165E1] bg-opacity-60 m-auto rounded-md w-full">
          <a
            href={company.facebook}
            target="blank"
            className="w-full items-center h-full flex justify-center gap-1"
          >
            <span className="flex">
              <SiFacebook />
            </span>
            <span>|</span>
            <span>facebook</span>
          </a>
        </div>
        {company.instagram && (
          <div className="p-2  bg-zinc-500 cursor-pointer transition-all hover:bg-[#F77737] bg-opacity-60 m-auto rounded-md w-full ">
            <a
              href={company.instagram}
              target="blank"
              className="w-full h-full flex justify-center gap-1 items-center"
            >
              <span className="flex">
                <SiInstagram />
              </span>
              <span>|</span>
              <span>instagram</span>
            </a>
          </div>
        )}
        {company.tiktok && (
          <div className="p-2 bg-zinc-500 cursor-pointer transition-all hover:bg-[#ff0050] bg-opacity-60 m-auto rounded-md w-full">
            <a
              href={company.tiktok}
              target="blank"
              className="w-full h-full flex justify-center gap-1 items-center"
            >
              <span className="flex">
                <SiTiktok />
              </span>
              <span>|</span>
              <span>tiktok</span>
            </a>
          </div>
        )}
        <div className="p-2 bg-opacity-60 bg-zinc-500 cursor-pointer transition-all hover:bg-[#EA4335] m-auto rounded-md w-full">
          <a
            href={company.google}
            target="blank"
            className="w-full items-center gap-1 h-full flex justify-center"
          >
            <SiGooglemaps />
            <span>|</span>
            <span>google maps</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Company;
