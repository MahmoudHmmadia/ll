import SectionBg from "./SectionBg";
import Container from "./Container";
import GlobalContext from "../context/GlobalContext";
import { FOOTER, social } from "../constants/data";
import {
  SiGooglemaps,
  SiFacebook,
  SiInstagram,
  SiTiktok,
} from "react-icons/si";
function Footer() {
  const { lan } = GlobalContext();
  return (
    <div className="py-5 relative" id="contact">
      <SectionBg src="assets/66.jpg" opacity="opacity-40" />
      <div className="relative">
        <Container>
          <div className="flex flex-col gap-2 uppercase items-center">
            <img src="assets/logo.png" alt="" width={150} />
            <p className="text-gray-200 text-xs sm:text-sm tracking-wide text-center">
              {FOOTER[lan].time}
            </p>
            <p className="text-gray-200 text-xs sm:text-sm tracking-wide text-center">
              {FOOTER[lan].DepartmentOfArchitecturalMapsDesign}
            </p>
            <p className="text-gray-200 text-xs sm:text-sm tracking-wide text-center">
              {FOOTER[lan].InteriorDesignDepartment}
            </p>
            <p className="text-gray-200 text-xs sm:text-sm tracking-wide text-center">
              {FOOTER[lan].address}
            </p>
            <div className="md:w-6/12 w-full h-[1px] bg-zinc-600"></div>
            <div className="flex mt-4 justify-center gap-8 items-center">
              {social.map((li, index) => (
                <div
                  key={index}
                  className="p-3 bg-zinc-950 bg-opacity-90 justify-center items-center rounded-full transition-all cursor-pointer"
                >
                  <li.icon />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Footer;
