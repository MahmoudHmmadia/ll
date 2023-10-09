function SectionBg({
  src,
  opacity = "opacity-60",
}: {
  src: string;
  opacity?: string;
}) {
  return (
    <div
      className={`absolute left-0 top-0 w-full h-full bg-cover ${opacity}`}
      style={{
        backgroundImage: `url(${src})`,
      }}
    ></div>
  );
}

export default SectionBg;
