import { useState } from "react";

function ImageSlider({ images }: { images: string[] | string }): JSX.Element {
  const [activeImg, setActiveImg] = useState(0);
  return (
    <div className="flex flex-col gap-5 place-self-center ">
      <div className="flex items-center justify-center h-80 w-80  rounded-md md:h-[450px] md:w-[450px]">
      <img
        src={images[activeImg]}
        alt={images[activeImg]}
        className="w-full h-full object-cover object-top"
      />
      </div>
      <div className="flex justify-start gap-5 ">
        {Array.isArray(images) &&
          images.map((src, index) => {
            return index !== activeImg ? (
              <img
                key={index}
                src={src}
                alt={src}
                onClick={() => setActiveImg(index)}
                className="h-20 w-20 cursor-pointer rounded-md object-cover"
              />
            ) : null;
          })}
      </div>
    </div>
  );
}

export default ImageSlider;
