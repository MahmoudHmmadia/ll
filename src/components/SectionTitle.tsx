function SectionTitle({ title }: { title: any }) {
  return (
    <div className="flex flex-col cool gap-1 justify-center items-center uppercase text-main text-center">
      <h1 className="text-6xl">{title}</h1>
      <div className="sm:w-[200px] w-[150px]">
        <img src="/assets/ptt.png" alt="" />
      </div>
    </div>
  );
}

export default SectionTitle;
