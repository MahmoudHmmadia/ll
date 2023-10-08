import { Navigate, useParams } from "react-router-dom";
import { useData } from "../../constants/data";
import { motion as m } from "framer-motion";
import { Nav } from "../../components/Nav";
import SectionTitle from "../../components/SectionTitle";
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
    <m.div
      initial={{
        opacity: 0,
        y: -20,
      }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          stiffness: 50,
          type: "spring",
          delay: 0.5,
        },
      }}
      exit={{
        opacity: 0,
        y: -20,
      }}
      className="flex flex-col gap-4 relative overflow-hidden bg-cover min-h-screen"
      style={{
        backgroundImage: "url('assets/bg1.jpg')",
      }}
    >
      <div className="absolute bg-gradient_main opacity-80 w-full h-full min-h-screen left-0 top-0"></div>
      <Nav />
      <div className="relative flex flex-col gap-6">
        <SectionTitle title={title} />
        <p className="text-zinc-200 uppercase tracking-wide text-center">
          {info}
        </p>
      </div>
    </m.div>
  );
}

export default Work;
