import { useState } from "react";
import classNames from "classnames";
import { SecretGiftDescription, SecretGiftContainer } from "@components";

export default function SecretGift(): JSX.Element {
  const [isVisibleSelect, setIsVisibleSelect] = useState(false);

  return (
    <>
      <div
        className={classNames("relative left-0 top-0 w-full", {
          "bg-[url('src/shared/assets/img/secretGift/animation.svg')]":
            isVisibleSelect,
        })}
      >
        <div className="relative flex w-full flex-col items-center justify-center px-5 pb-5 text-black backdrop-blur-md">
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
