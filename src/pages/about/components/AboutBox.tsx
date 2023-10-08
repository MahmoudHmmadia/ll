import React from "react";
type props = {
  title: string;
  content: string;
  imageSrc: string;
};
function AboutBox({ title, content, imageSrc }: props) {
  return (
    // <div className="rounded-[60px] overflow-hidden shadow-2xl h-full relative flex flex-col bg-alt bg-opacity-80 items-center gap-4">
    //   <div className="image relative min-h-[200px] w-full ">
    //     <div className="absolute left-0 top-0 w-full h-full rounded-br-[60px] bg-gradient_main"></div>
    //     <div className="absolute w-[60px] h-[60px] -left-0 -bottom-[60px] bg-alt bg-opacity-80 rounded-tl-[60px] opacity-100 z-10"></div>
    //     <div className="absolute w-[60px] h-[60px]  -left-0 -bottom-[60px] bg-gradient_main"></div>
    //     {/* <img src={imageSrc} alt="IMAGE" /> */}
    //   </div>
    //   <div className="flex flex-col gap-4 w-full items-center p-4 z-20">
    //     <h1 className="text-2xl text-center text-main font-bold uppercase">
    //       {title}
    //     </h1>
    //     <p className="text-sm text-center text-zinc-200 uppercase tracking-wide ">
    //       {content}
    //     </p>
    //   </div>
    // </div>
    <div className="flex flex-col gap-4 p-10">
      <h1 className="text-4xl uppercase cool">{title}</h1>
      <p className="text-sm opacity-80">{content}</p>
    </div>
  );
}

export default AboutBox;
