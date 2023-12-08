import SectionBg from "./SectionBg";
import Container from "./Container";
import GlobalContext from "../context/GlobalContext";
import { FOOTER, social } from "../constants/data";
import FooterLi from "./FooterLi";
function Footer() {
  const { lan } = GlobalContext();
  return (
    <div className="py-5 relative" id="contact">
      <SectionBg src="assets/66.jpg" opacity="opacity-40" />
      <div className="relative">
        <Container>
          <div className="flex flex-col gap-2 uppercase items-center">
            <img src="assets/logo.png" alt="LOGO" className="sm:w-40 w-28" />
            <FooterLi content={FOOTER[lan].time} />
            <FooterLi
              content={FOOTER[lan].DepartmentOfArchitecturalMapsDesign}
            />
            <FooterLi content={FOOTER[lan].InteriorDesignDepartment} />
            <FooterLi content={FOOTER[lan].address} />
            <div className="md:w-6/12 w-full h-[1px] bg-zinc-600"></div>
            <div className="flex mt-4 justify-center sm:gap-8 gap-4 items-center">
              {social.map((li, index) => (
                <div
                  key={index}
                  className="p-2 bg-zinc-950 bg-opacity-90 justify-center items-center rounded-full transition-all cursor-pointer"
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
