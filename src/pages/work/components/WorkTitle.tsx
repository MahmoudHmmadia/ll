function WorkTitle({ title }: { title: string }) {
  return (
    <div className="relative lg:w-10/12 flex m-auto">
      <div className="sm:w-4 w-2 h-full self-stretch absolute sm:-left-5 -left-3 flex bg-main"></div>
      <div className="sm:w-2 w-1 h-full self-stretch absolute sm:-left-8 flex -left-5 bg-main"></div>
      <div className="sm:w-2 w-1 h-full self-stretch absolute sm:-left-11 flex -left-7 bg-main"></div>
      <div className="border-4 p-2 sm:text-4xl text-xl text-main relative text-center uppercase w-full">
        <p>{title}</p>
      </div>
    </div>
  );
}

export default WorkTitle;
