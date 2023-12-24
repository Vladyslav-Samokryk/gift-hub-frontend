import ToggleBox from "@src/shared/UI/ToggleBox";
import type { TRCharacteristics, TRFAQ } from "@src/shared/types/Translation";
import classNames from "classnames";
import { t } from "i18next";
import { useState } from "react";

function DescriptionContainer({
  description,
}: {
  description: string;
}): JSX.Element {
  const [activeDesc, setActiveDesc] = useState(0);
  const characteristics: TRCharacteristics = t("characteristics", {
    returnObjects: true,
  });

  const delivery: string[] = t("delivery", {
    returnObjects: true,
  });

  const faq: TRFAQ[] = t("faq", {
    returnObjects: true,
  });

  return (
    <section className="flex flex-col md:flex-row gap-3 md:divide-x-2 rounded-md border border-blue-200 bg-white px-5 py-3">
      <div className="md:my-10 my-2 flex justify-between gap-2 items-center md:justify-normal md:gap-16 md:flex-col">
        {Object.values(characteristics).map((el, i) => {
          return (
            <h5
              key={i}
              onClick={() => setActiveDesc(i)}
              className={classNames(
                "md:whitespace-nowrap text-center font-sm font-semibold md:primary cursor-pointer",
                {
                  "md:text-blue-700 decoration-blue-700 underline-offset-[14px] underline md:no-underline":
                    activeDesc === i,
                  "md:text-gray-600 font-light": activeDesc !== i,
                },
              )}
            >
              {el}
            </h5>
          );
        })}
      </div>
      <div className="h-80 overflow-auto px-3 md:py-0 w-full">
        {activeDesc === 0 ? (
          <p>{description}</p>
        ) : activeDesc === 1 ? (
          <ol className="list-decimal px-3">
            {delivery.map((el, i) => (
              <li key={i}>{el}</li>
            ))}
          </ol>
        ) : (
          <div>
            {faq.map((el, i) => (
              <ToggleBox key={i} header={el.question} description={el.answer} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default DescriptionContainer;
