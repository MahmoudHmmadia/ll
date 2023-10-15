function SectionTitle({ title }: { title: any }) {
  return (
    <div className="flex z-10 flex-col gap-1 justify-center items-center uppercase text-white text-center">
      <h1 className="text-2xl sm:text-4xl">{title}</h1>
      <div className=" sm:w-[150px] w-[100px]">
        <img src="/assets/ptt.png" alt="" />
      </div>
    </div>
  );
}

export default SectionTitle;
