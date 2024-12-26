import { FC } from "react";

const images = [
  { src: "/r1.png", alt: "Image 1", colSpan: "col-span-1", rowSpan: "row-span-2" },
  { src: "/r2.png", alt: "Image 2", colSpan: "col-span-2", rowSpan: "row-span-1" },
  { src: "/r3.png", alt: "Image 3", colSpan: "col-span-1", rowSpan: "row-span-2" },
  { src: "/r4.png", alt: "Image 4", colSpan: "col-span-1", rowSpan: "row-span-2" },
  { src: "/r5.png", alt: "Image 5", colSpan: "col-span-1", rowSpan: "row-span-1" },
  { src: "/r6.png", alt: "Image 6", colSpan: "col-span-1", rowSpan: "row-span-2" },
  { src: "/r7.png", alt: "Image 7", colSpan: "col-span-2", rowSpan: "row-span-2" },
  { src: "/r8.png", alt: "Image 8", colSpan: "col-span-1", rowSpan: "row-span-1" },
];

const Gallery: FC = () => {
  return (
    <div className="flex flex-col items-stretch py-10 px-5">
      <h1 className="text-center text-lg text-slate-300">
        Share your setup with 
      </h1>
      <h1 className="text-black font-extrabold text-4xl flex justify-center">#FuniroFurniture</h1>
      <div
        className="
          mt-8
          grid
          grid-cols-4
          gap-4
          auto-rows-[150px]
        "
      >
        {images.map(({ src, alt, colSpan, rowSpan }, index) => (
          <div
            key={index}
            className={`relative overflow-hidden rounded-lg shadow-md group ${colSpan} ${rowSpan}`}
          >
            <img
              src={src}
              alt={alt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
