import { useState } from "react";
import classNames from "classnames";
import SecretGiftDescription from "@src/components/SecretGiftDescription";
import SecretGiftHeader from "@src/components/SecretGiftHeader";
import SecretGiftContainer from "@src/components/SecretGiftContainer";

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
          <SecretGiftHeader />
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
