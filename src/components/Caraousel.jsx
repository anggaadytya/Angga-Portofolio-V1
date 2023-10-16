import { Carousel } from "@material-tailwind/react";
import { useEffect } from "react";
export function CarouselCustomNavigation({ img, selectedImage }) {
  useEffect(() => {
    console.log(img);
  }, []);

  return (
    <Carousel
      className=" md:h-[570px] lg:h-[600px] w-full"
      activeIndex={selectedImage}
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-['']  ${
                activeIndex === i ? "w-8 bg-black" : "w-4 bg-black"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      {img.map((image, index) => {
        return (
          <img
            key={index}
            src={image}
            alt={`image ${index + 1}`}
            className="h-full w-full object-cover"
          />
        );
      })}
    </Carousel>
  );
}
