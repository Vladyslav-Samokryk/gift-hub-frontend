import ToggleBox from "shared/UI/ToggleBox";
import type { TRCharacteristics, TRFAQ } from "shared/types/Translation";
import * as classNames from "classnames";
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
    <section className="flex flex-col gap-3 rounded-md border border-blue-200 bg-white px-5 py-3 md:flex-row md:divide-x-2">
      <div className="my-2 flex items-center justify-between gap-2 md:my-10 md:flex-col md:justify-normal md:gap-16">
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
      <div className="h-80 w-full overflow-auto px-3 md:py-0">
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
