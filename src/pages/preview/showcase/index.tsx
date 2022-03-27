import { FC } from "react";

export const Showcase: FC<{ images?: string[] }> = ({ images }) => {
  return (
    <section className="relative">
      <div className="min-h-screen flex items-center justify-center bg-[#4b4b4b] flex-col py-28 gap-28">
        {images?.map((image, id) => (
          <img
            src={image}
            className="w-[70%] h-[70%] flex items-center justify-center  bg-cover"
            alt="hero"
            key={id}
          />
        ))}
      </div>
    </section>
  );
};
