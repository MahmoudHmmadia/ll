import { IconType } from "react-icons/lib";

type props = {
  name: string;
  Icon: IconType;
  color: string;
  href: string;
};

function CompanyLink({ name, Icon, color, href }: props) {
  return (
    <div
      className={`p-2 bg-zinc-500 cursor-pointer transition-all hover:bg-[${color}] bg-opacity-60 m-auto rounded-md w-full`}
    >
      <a
        href={href}
        target="blank"
        className="w-full h-full flex justify-center gap-1 items-center"
      >
        <span className="flex">
          <Icon />
        </span>
        <span>|</span>
        <span>{name}</span>
      </a>
    </div>
  );
}

export default CompanyLink;
