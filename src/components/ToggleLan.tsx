import GlobalContext from "../context/GlobalContext";

import { BsGlobeEuropeAfrica } from "react-icons/bs";

function ToggleLan() {
  const { setLan } = GlobalContext();

  return (
    <div
      className="flex sm:text-2xl text-lg items-center cursor-pointer gap-2 text-main sm:order-1 -order-2"
      onClick={() => {
        setLan((prev) => {
          if (prev === "ar") return "en";
          return "ar";
        });
      }}
    >
      <BsGlobeEuropeAfrica />
    </div>
  );
}

export default ToggleLan;
