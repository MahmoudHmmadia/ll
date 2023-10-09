import { Navigate, useParams } from "react-router-dom";
import { useData } from "../../constants/data";
import { Nav } from "../../components/Nav";
import PageTransition from "../../components/PageTransition";
import Container from "../../components/Container";
import WorkTitle from "./components/WorkTitle";
import Shape from "../../components/Shape";
import MyText from "../../components/MyText";
import SectionBg from "../../components/SectionBg";
import CoolImage from "../../components/CoolImage";
import WorkCountryModel from "./components/WorkCountryModel";
function Work() {
  const { workId } = useParams();
  const { works } = useData();
  if (works.filter((work) => work.id === workId).length === 0) {
    return <Navigate to={"/"} />;
  }
  const { country, imgSrc1, imgSrc2, info, title } = works.filter(
    (work) => work.id === workId
  )[0];
  return (
    <PageTransition>
      <div className="flex flex-col pb-10 relative overflow-hidden bg-cover min-h-screen">
        <SectionBg src="assets/66.jpg" />
        <Nav />
        <div className="relative">
          <div className="absolute left-2 md:top-10 top-40">
            <Shape />
          </div>
          <div className="absolute left-2 md:top-32 uppercase opacity-20 top-80">
            <WorkCountryModel country={country} />
          </div>
          <Container>
            <div className="relative flex flex-col gap-6 z-10">
              <WorkTitle title={title} />
              <div className="lg:w-8/12 m-auto">
                <MyText content={info} delay={0.4} center med />
              </div>
              <div className="flex gap-10 justify-center items-center flex-col md:flex-row">
                <CoolImage src={imgSrc1} width="md:w-[400px] w-[300px]" />
                <Shape />
                <CoolImage src={imgSrc2} width="md:w-[400px] w-[300px]" />
              </div>
            </div>
          </Container>
        </div>
      </div>
    </PageTransition>
  );
}

export default Work;
