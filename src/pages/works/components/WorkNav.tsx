import { Dispatch, SetStateAction, useState } from "react";
import { WORKS } from "../../../constants/data";
import GlobalContext from "../../../context/GlobalContext";
type props = {
  isShowen: boolean;
  setIsShowen: Dispatch<SetStateAction<boolean>>;
};
function WorkNav({ isShowen, setIsShowen }: props) {
  const { lan } = GlobalContext();
  const [workState, setWorkState] = useState("all");
  return (
    <ul
      className={`lg:grid items-center bg-black w-max gap-10 transition-all flex flex-col bg-opacity-90 p-2 rounded-lg lg:relative absolute lg:left-0 left-10 lg:gap-1 ${
        isShowen ? "opacity-100 z-10" : "opacity-0 -z-40 lg:opacity-100"
      }`}
      style={{
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
        direction: lan == "ar" ? "rtl" : "ltr",
      }}
    >
      {WORKS[lan].nav.map((item) => (
        <li
          key={item}
          className={`p-2 text-sm flex justify-center rounded-lg w-full hover:bg-main hover:text-black cursor-pointer transition-all uppercase ${
            workState === item ? "bg-main text-black" : ""
          }`}
          onClick={() => {
            setWorkState(item);
            setIsShowen(!isShowen);
          }}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export default WorkNav;
