import * as classNames from "classnames";
import { useState } from "react";

interface ImgWithPreloaderProps {
  className: string;
  img: string;
  name: string;
}

const ImgWithPreloader = ({
  className,
  img,
  name,
}: ImgWithPreloaderProps): JSX.Element => {
  const [imgLoad, setImgLoad] = useState(false);

  return (
    <picture>
      <div
        className={classNames(className, {
          "animate-pulse bg-slate-300": !imgLoad,
        })}
      >
        <img
          className={classNames("visible object-cover " + className, {
            invisible: !imgLoad,
          })}
          src={img}
          alt={name}
          onLoad={() => setImgLoad(true)}
        />
      </div>
    </picture>
  );
};

export default ImgWithPreloader;
