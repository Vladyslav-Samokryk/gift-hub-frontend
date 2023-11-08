import { useTranslation } from "react-i18next";
import {
  TechnyBigGiftBox,
  TechnyRubiksCubePuzzle,
  type TRSecretGift,
} from "@shared";
import classNames from "classnames";

interface SecretGiftDescriptionProps {
  setIsVisibleSelect: (prev: boolean) => void;
}

export default function SecretGiftDescription({
  setIsVisibleSelect,
}: SecretGiftDescriptionProps): JSX.Element {
  const { t } = useTranslation();
  const secretGift: TRSecretGift = t("secret_gift", {
    returnObjects: true,
  });
  return (
    <>
      <section className="w-[90%]">
        <section className="flex flex-col items-center justify-around gap-2 md:flex-row">
          <TechnyRubiksCubePuzzle />
          <div className="flex flex-col items-start justify-start md:max-w-[60%] ">
            <h4 className="md:h4 h6 mb-3 w-full bg-primary-linear bg-clip-text text-center text-transparent md:text-start">
              {secretGift.title}
            </h4>
            <p className="md:primary secondary">{secretGift.subtitles[0]}</p>
          </div>
        </section>

        <section className="primary mt-10 flex flex-col items-center justify-center md:mt-10">
          <p>{secretGift.process_header}</p>
          <ul className="mt-8 grid w-full list-decimal grid-cols-1 grid-rows-3 gap-5 pl-8 md:mt-10 md:grid-cols-3 md:grid-rows-1 md:gap-14">
            {secretGift.process_steps.map((step, index) => {
              return (
                <li
                  key={index}
                  className={classNames(
                    "relative z-20 pl-6 after:absolute after:left-[-27px]  after:top-[-2px] after:z-[-1] after:h-[30px] after:w-[30px] md:after:left-[-34px] md:after:top-0",
                    {
                      "after:content-bobble1": index === 0,
                      "after:content-bobble2": index === 1,
                      "after:content-bobble3": index === 2,
                    },
                  )}
                >
                  {step}
                </li>
              );
            })}
          </ul>
        </section>

        <section className="mt-10 flex w-full flex-col-reverse items-center justify-between gap-5 md:mt-10 md:flex-row md:gap-2">
          <div>
            <p className="primary md:h6 mt-3 bg-primary-linear bg-clip-text text-start text-transparent md:mt-0 md:text-center">
              {secretGift.subtitles[1]}
            </p>
          </div>
          <TechnyBigGiftBox />
        </section>
      </section>
      <button
        onClick={() => setIsVisibleSelect(true)}
        className="btn btn-effect m-auto mb-10 mt-5 w-60 bg-purple-900 py-4"
      >
        {secretGift.try_button}
      </button>
    </>
  );
}
