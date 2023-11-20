import { useState } from "react";
import { SecretGiftDescription, SecretGiftContainer } from "@components";

export default function SecretGift(): JSX.Element {
  const [isVisibleSelect, setIsVisibleSelect] = useState(false);

  return (
    <>
      <div
        className="relative left-0 top-0 w-full"
        style={
          isVisibleSelect
            ? {
                backgroundImage:
                  "url('https://main--lighthearted-cocada-0d2e37.netlify.app/img/animation.svg')]",
              }
            : {}
        }
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
