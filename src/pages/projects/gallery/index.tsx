import { FC } from "react";

export const Gallery = () => {
  return (
    <div className="px-[10vw] w-full max-w-[1280] mx-auto font-graphik">
      <div className="flex border h-[200vh]">
        <ImageComponent />

        <ImageComponent />
      </div>
    </div>
  );
};

interface IImageComponent {
  image?: string;
}

export const ImageComponent: FC<IImageComponent> = ({ image }) => {
  return (
    <div className="px-[5%] w-1/2">
      <div className=" h-[80vh] overflow-hidden border max-w-[500px]">
        <img src={image} alt={image} />
      </div>
      <div className="flex w-full pt-[60px]">
        <p className="uppercase text-11 tracking-2 opacity-70 pr-5">Clane</p>
        <div className="h-[1px] w-[35%] bg-white/30 mt-[5px]" />
      </div>
      <h1 className="my-[30px] text-22 max-w-[300px] leading-[1.6] font-light">
        Aesthetic in mobile commerce experience
      </h1>
      <div className="opacity-60 max-w-[300px] -mt-[10] text-14 mb-4 pr-5">
        <span className="-mt-5 leading-[1.8]">Strategy</span>.{" "}
        <span className="-mt-5 leading-[1.8]">Concept</span>.{" "}
        <span className="-mt-5 leading-[1.8]">UI/UX Design</span>.{" "}
        <span className="-mt-5 leading-[1.8]">Web Design</span>.{" "}
        <span className="-mt-5 leading-[1.8]">Mobile App</span>.
      </div>
    </div>
  );
};
