/* eslint-disable tailwindcss/classnames-order */
import { useState } from "react";

function ImageSlider({ images }: { images: string[] | string }): JSX.Element {
  const [activeImg, setActiveImg] = useState(0);
  return (
    <div className="flex flex-col gap-5 place-self-center ">
      <img
        src={images[activeImg]}
        alt={images[activeImg]}
        className="h-80 w-80 rounded-md md:h-[450px] md:w-[450px]"
      />
      <div className="flex justify-start gap-5 ">
        {Array.isArray(images) &&
          images.map((src, index) => {
            return index !== activeImg ? (
              <img
                key={index}
                src={src}
                alt={src}
                onClick={() => setActiveImg(index)}
                className="w-20 h-20 rounded-md object-cover cursor-pointer"
              />
            ) : null;
          })}
      </div>
    </div>
  );
}

export default ImageSlider;
