import "./button.scss";
import { motion as m } from "framer-motion";
type props = {
  content: string;
  bgColor?: string;
  color?: string;
  altColor?: string;
  outline: string;
  button_circle_bg_color?: string;
  animate?: boolean;
  clickFunction?: () => void;
};

export function AltButton({
  content,
  button_circle_bg_color,
  bgColor = "bg-alt",
  outline,
  color,
  altColor,
  animate,
  clickFunction,
}: props) {
  return (
    <m.button
      className={`button p-2 relative font-extrabold w-full tracking-wider uppercase flex justify-center items-center overflow-hidden ${outline} ${bgColor} ${color}`}
      style={{}}
      initial={{
        y: animate ? "30%" : "",
        opacity: animate ? 0 : "",
      }}
      animate={{
        y: animate ? "0%" : "",
        opacity: animate ? 1 : "",
      }}
      transition={{
        duration: 0.5,
        delay: 2,
      }}
      onClick={clickFunction}
    >
      <div
        className={`absolute button_circle transition-all left-1/2 rounded-full flex gap-1 items-center ${button_circle_bg_color}`}
        style={{
          width: "200%",
          height: "200%",
          top: "-200%",
        }}
      ></div>
      <p className="">{content}</p>
      <div
        className={`absolute cool_text transition-all w-full ${altColor}`}
        style={{
          top: "150%",
          left: "50%",
          transform: "translate(-50%,-50%)",
        }}
      >
        <span>{content}</span>
      </div>
    </m.button>
  );
}
