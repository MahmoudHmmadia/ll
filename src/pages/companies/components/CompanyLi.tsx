import GlobalContext from "../../../context/GlobalContext";

function CompanyLi({ content, title }: { content: string; title: string }) {
  const { lan } = GlobalContext();
  return (
    <div className={`flex flex-col gap-2`}>
      <div
        className={`sm:text-base text-sm w-full text-white flex flex-col relative ${lan}`}
      >
        <span className="relative w-fit">
          {title}
          <span
            className={`absolute -bottom-1 h-[3px] lg:w-1/3 w-1/2 ${
              lan == "ar" ? "right-0" : "left-0"
            } -bottom-1 bg-main`}
          ></span>
        </span>
      </div>
      <p
        className={`tracking-wide info md:text-base sm:text-sm text-xs w-full text-gray-200 ${
          title === "أوقات العمل:" && "flex justify-end special"
        }`}
      >
        {content}
      </p>
    </div>
  );
}

export default CompanyLi;
