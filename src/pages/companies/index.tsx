import Container from "../../components/Container";
import SectionBg from "../../components/SectionBg";
import SectionTitle from "../../components/SectionTitle";
import { COMPANIES, useData } from "../../constants/data";
import GlobalContext from "../../context/GlobalContext";
import Company from "./components/Company";
function Companies() {
  const { lan } = GlobalContext();
  const { companies } = useData();

  return (
    <div className="py-20 relative companies" id="companies">
      <SectionBg src="assets/33.jpg" opacity="opacity-20" />
      <Container>
        <SectionTitle title={COMPANIES[lan].title} />
        <div className="grid gap-5 mt-20 companies-boxes">
          {companies.map((company) => (
            <Company company={company} key={company.name} />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Companies;
