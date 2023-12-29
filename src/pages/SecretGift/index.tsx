import { useState } from "react";
import SecretGiftContainer from "components/SecretGiftContainer";
import SecretGiftDescription from "components/SecretGiftDescription";
import classNames from "classnames";

export default function SecretGift(): JSX.Element {
  const [isVisibleSelect, setIsVisibleSelect] = useState(false);

  return (
    <div
      className={classNames("relative left-0 top-0 w-full", {
        "bg-[url('https://main--lighthearted-cocada-0d2e37.netlify.app/img/animation.svg')]]":
          isVisibleSelect,
      })}
    >
      <div className="relative flex w-full flex-col items-center justify-center px-5 pb-5 text-black backdrop-blur-md">
        {!isVisibleSelect ? (
          <SecretGiftDescription setIsVisibleSelect={setIsVisibleSelect} />
        ) : (
          <SecretGiftContainer isVisibleSelect={isVisibleSelect} />
        )}
      </div>
    </div>
  );
}
