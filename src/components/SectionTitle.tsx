function SectionTitle({ title }: { title: any }) {
  return (
    <div className="flex flex-col gap-1 justify-center items-center uppercase text-white text-center">
      <h1 className="text-5xl">{title}</h1>
      <div className=" w-[150px]">
        <img src="/assets/ptt.png" alt="" />
      </div>
    </div>
  );
}

export default SectionTitle;
