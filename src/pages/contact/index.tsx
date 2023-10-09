import Container from "../../components/Container";
import SectionBg from "../../components/SectionBg";
import SectionTitle from "../../components/SectionTitle";
import { CONTACT } from "../../constants/data";
import GlobalContext from "../../context/GlobalContext";
function Contact() {
  const { lan } = GlobalContext();
  return (
    <div className="py-20 relative works" id="contact">
      <SectionBg src="assets/66.jpg" opacity="opacity-30" />
      <Container>
        <SectionTitle title={CONTACT[lan].title} />
      </Container>
    </div>
  );
}

export default Contact;
