type props = {
  title: string;
  content: string;
  imageSrc: string;
};
function AboutBox({ title, content, imageSrc }: props) {
  return (
    <div className="flex flex-col gap-4 p-10">
      <h1 className="text-4xl uppercase cool">{title}</h1>
      <p className="text-sm opacity-80">{content}</p>
    </div>
  );
}

export default AboutBox;
