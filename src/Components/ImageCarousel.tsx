import { useEffect, useRef, useState } from "react";

const ImageCarousel: React.FC<{ images: string[] }> = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sliderRef.current) {
        const index = Math.round(
          sliderRef.current.scrollLeft / sliderRef.current.offsetWidth
        );
        setActiveIndex(index);
      }
    };

    sliderRef.current?.addEventListener("scroll", handleScroll);
    return () => sliderRef.current?.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative max-w-[48rem] mx-auto">
      <div
        ref={sliderRef}
        className="flex aspect-square overflow-auto snap-x snap-mandatory scroll-smooth no-scrollbar"
      >
        {images.map((image, index) => (
          <img
            key={index}
            className="flex-1 shrink-0 snap-start aspect-square object-cover object-bottom"
            src={image}
            alt={`Slide ${index + 1}`}
          />
        ))}
      </div>
      <div className="absolute flex gap-1.5 -bottom-10 left-1/2 -translate-x-1/2 z-10">
        {images.map((_, index) => (
          <a
            key={index}
            href={`#slide-${index}`}
            className={`w-2 h-2 rounded-full opacity-75 hover:bg-blue-500 transition-all
              ${index === activeIndex ? "bg-blue-500" : "bg-gray-300"}`}
            onClick={(e) => {
              e.preventDefault();
              if (sliderRef.current) {
                sliderRef.current.scrollLeft =
                  index * sliderRef.current.offsetWidth;
              }
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
