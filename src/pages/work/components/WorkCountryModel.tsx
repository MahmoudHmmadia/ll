function WorkCountryModel({ country }: { country: string }) {
  return (
    <div className="flex flex-col gap-4 text-8xl text-main">
      <span className="cool-text">{country}</span>
      <span className="cool-text">{country}</span>
      <span className="cool-text">{country}</span>
    </div>
  );
}

export default WorkCountryModel;
