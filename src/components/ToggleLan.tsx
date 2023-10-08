import GlobalContext from "../context/GlobalContext";

import { BsGlobeEuropeAfrica } from "react-icons/bs";

function ToggleLan() {
  const { setLan } = GlobalContext();

  return (
    <div
      className="flex text-2xl items-center cursor-pointer gap-2 text-alt sm:order-1 -order-2"
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
