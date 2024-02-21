import { Link } from "react-router-dom";

import type { OfferContractIndex } from "shared/types/OfferContract";
import type {
  TROfferContact,
  TRPaymantAndDelivery,
  TRPrivacyPolice,
  TRReturnConditions,
} from "shared/types/Translation";

export default function AdditionalInfo({
  data,
}: {
  data:
    | TROfferContact
    | TRPaymantAndDelivery
    | TRReturnConditions
    | TRPrivacyPolice;
}): JSX.Element {
  if ("sub_text" in data) {
    const [firstPart, secondPart] = data.title.split("{{link}}");

    const textKeys = Object.keys(data.text);
    const subTextKeys = Object.keys(data.sub_text);

    const textEntries = data.text as Record<string, string[]>;
    const subTextEntries = data.sub_text as Record<string, string[]>;

    const entries: OfferContractIndex = {
      2: { textIndexKey: [2, 8], subTextKey: [0, 1] },
      3: { textIndexKey: [0, 1, 2], subTextKey: [2, 3, 4] },
    };

    return (
      <section className="flex w-full flex-col items-center justify-center pb-24 font-rubik lg:px-28">
        <h2 className="mb-3 mt-6 text-2xl font-medium uppercase text-black md:text-4xl">
          {data.main_title}
        </h2>
        <section className="flex w-[90%] flex-col gap-9 text-2xl font-light lg:w-auto">
          <p>
            {firstPart}
            <Link to="/" className="text-blue-600">
              GiftHub
            </Link>
            {secondPart}
          </p>

          {data.subtitle.map((subtitle, indexTitle) => (
            <div key={indexTitle}>
              <h3 className="mb-3 flex items-center justify-center text-2xl font-normal text-blue-900 md:text-4xl">
                {indexTitle + 1}. {subtitle}
              </h3>
              {textEntries[textKeys[indexTitle]].map((text, textIndex) => (
                <div key={`${indexTitle}-${textIndex}`}>
                  <p className=" mb-4">
                    {text.includes("{{link}}") ? (
                      <>
                        {indexTitle + 1}.{textIndex + 1}.{" "}
                        {text.split("{{link}}")[0]}
                        <Link to="/" className="text-blue-600  underline">
                          https://main--lighthearted-cocada-0d2e37.netlify.app/
                        </Link>
                        {text.split("{{link}}")[1]}
                      </>
                    ) : (
                      `${indexTitle + 1}.${textIndex + 1}. ${text}`
                    )}
                  </p>
                  {entries[indexTitle]?.textIndexKey.includes(textIndex) &&
                    entries[indexTitle].subTextKey.map((subTextKeyIndex) => {
                      if (
                        (textIndex === 2 && subTextKeyIndex === 0) ||
                        (textIndex === 0 && subTextKeyIndex === 2) ||
                        (textIndex === 1 && subTextKeyIndex === 3) ||
                        (textIndex === 2 && subTextKeyIndex === 4)
                      ) {
                        const subTexts =
                          subTextEntries[subTextKeys[subTextKeyIndex]];
                        return subTexts?.map(
                          (sub_text: string, index: number) => (
                            <div key={index}>
                              <p className="mb-4 ml-10">
                                {indexTitle + 1}.{textIndex + 1}.{index + 1}.{" "}
                                {sub_text}
                              </p>
                            </div>
                          ),
                        );
                      } else if (textIndex === 8 && subTextKeyIndex === 1) {
                        const subTexts =
                          subTextEntries[subTextKeys[subTextKeyIndex]];
                        return subTexts?.map(
                          (sub_text: string, index: number) => (
                            <div key={index}>
                              <p className="mb-4 ml-10">{sub_text}</p>
                            </div>
                          ),
                        );
                      }
                      return null;
                    })}
                </div>
              ))}
            </div>
          ))}
        </section>
      </section>
    );
  } else {
    return (
      <section className="flex w-full flex-col items-center justify-center pb-24 font-rubik lg:px-28">
        <h2 className="mb-3 mt-6 text-2xl font-medium uppercase text-black md:text-4xl">
          {data.main_title}
        </h2>
        <section className="flex w-[90%] flex-col gap-9 text-2xl font-light lg:w-auto">
          {data.text.map((text: string, indexText: number) => (
            <p key={indexText}> {`${indexText + 1}. ${text}`}</p>
          ))}
        </section>
      </section>
    );
  }
}
