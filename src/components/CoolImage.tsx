import { ReactNode } from "react";
import ImageRenderer from "./Image";

type props = {
  src: string;
  children?: ReactNode;
  width?: string;
  overlay?: boolean;
};
function CoolImage({ src, children, width, overlay }: props) {
  return (
    <div className={`${width} relative`}>
      <div className="absolute w-full h-full border-4 border-main -left-5 -bottom-5"></div>
      {overlay && (
        <div className="absolute w-full h-full left-0 top-0 bg-alt z-10 opacity-20"></div>
      )}
      <ImageRenderer url={src} height={"auto"} width={"auto"} thumb="" />
      {children}
    </div>
  );
}

export default CoolImage;
