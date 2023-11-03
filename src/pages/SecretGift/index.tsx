import { useState } from "react";
import classNames from "classnames";
import { SecretGiftDescription, SecretGiftContainer } from "@components";

export default function SecretGift(): JSX.Element {
  const [isVisibleSelect, setIsVisibleSelect] = useState(false);

  return (
    <>
      <div
        className={classNames({
          "bg-[url('src/shared/assets/img/secretGift/animation.svg')]":
            isVisibleSelect,
          "bg-white": !isVisibleSelect,
        })}
      >
        <div className="relative flex w-full flex-col items-center justify-center px-5 pb-24  text-black backdrop-blur-md">
          {!isVisibleSelect ? (
            <SecretGiftDescription setIsVisibleSelect={setIsVisibleSelect} />
          ) : (
            <SecretGiftContainer />
          )}
        </div>
      </div>
    </>
  );
}
