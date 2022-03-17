import { FC } from "react";
import { Link } from "react-router-dom";

export const Hero: FC<{ title?: string; name?: string }> = ({
  title,
  name,
}) => {
  return (
    <section className="text-white w-screen pb-[120px] pt-40">
      <div className="max-w-[850px] w-full mx-auto font-graphik">
        <div className="my-[2.3em] overflow-hidden h-[12px]">
          <h1 className="text-[11px] tracking-[2px] uppercase font-normal">
            /{" "}
            <Link to="/projects" className="opacity-50">
              WORK
            </Link>{" "}
            — {name}
          </h1>
        </div>
        <div className="text-[72px] leading-[90px] font-extralight my-[0.67em]">
          <div className="h-[94px] overflow-hidden">
            <h1>{title}</h1>
          </div>
        </div>
      </div>
    </section>
  );
};
