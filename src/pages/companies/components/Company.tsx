import {
  SiGooglemaps,
  SiFacebook,
  SiInstagram,
  SiTiktok,
} from "react-icons/si";
import MyText from "../../../components/MyText";
import GlobalContext from "../../../context/GlobalContext";
import CompanyLi from "./CompanyLi";
import CompanyLink from "./CompanyLink";
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
      key={company.address}
      className={`flex flex-col p-4 uppercase bg-opacity-10 relative ${
        company.cover === "assets/company1-cover1.jpg" && ""
      }`}
      style={{
        boxShadow: "0px 12px 20px 0px #000, 0px 6px 6px 0px #000",
      }}
    >
      <div
        className={`absolute left-0 top-0 w-full h-full opacity-10 bg-cover  bg-center ${
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
        <CompanyLi
          content={company.name}
          title={lan === "ar" ? "الاسم:" : "name:"}
        />
        <CompanyLi
          content={company.address}
          title={lan === "ar" ? "العنوان:" : "address:"}
        />
        <CompanyLi
          content={company.time}
          title={lan === "ar" ? "أوقات العمل:" : "working hours:"}
        />
        <CompanyLi
          content={company.phone}
          title={lan === "ar" ? "أرقام الهواتف:" : "Phone Numbers:"}
        />
      </div>
      <div className="w-full h-[1px] mt-4 bg-gray-400"></div>
      <div className="relative mt-4 flex gap-2 justify-center text-sm flex-wrap">
        <CompanyLink
          Icon={SiFacebook}
          color="#0165E1"
          href={company.facebook}
          name={lan === "en" ? "facebook" : "فيسبوك"}
        />
        {company.instagram && (
          <CompanyLink
            Icon={SiInstagram}
            color="#F77737"
            href={company.instagram}
            name={lan === "en" ? "instagram" : "إنستغرام"}
          />
        )}
        {company.tiktok && (
          <CompanyLink
            Icon={SiTiktok}
            color="#ff0050"
            href={company.tiktok}
            name={lan === "en" ? "tiktok" : "تيكتوك"}
          />
        )}
        <CompanyLink
          Icon={SiGooglemaps}
          color="#EA4335"
          href={company.google}
          name={lan === "en" ? "google maps" : "خرائط جوجل"}
        />
      </div>
    </div>
  );
}

export default Company;
