export const Header = () => {
  return (
    <header className="flex justify-between items-center h-[58px] my-[58px] px-[57px] absolute w-screen">
      <div className="w-[515px] font-bold text-4xl">
        ridwan.
        <p className="font-sourceSansPro leading-[0.5] text-base tracking-tight">
          ui developer
        </p>
      </div>
      <div className="w-[515px] flex justify-end mr-[52px] text-sm gap-8 font-bold font-sourceSansPro self-start mt-3">
        <h1>latest work</h1>
        <h1>blog</h1>
        <h1>schedule call</h1>
      </div>
    </header>
  );
};
