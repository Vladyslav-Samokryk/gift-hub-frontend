import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { WhiteClose } from "shared/assets/svg/CloseIcons";
import { TryAgainIcon } from "shared/assets/svg/TryAgainIcon";
import type { ProductCardType } from "shared/types/ProductTypes";

interface WinSectionProps {
  setUserWin: (value: boolean) => void;
  setWheelRotate: (value: boolean) => void;
  setPresent: (value: ProductCardType | null) => void;
  present: ProductCardType | null;
}

export default function WinSection({
  setUserWin,
  setWheelRotate,
  setPresent,
  present,
}: WinSectionProps): JSX.Element {
  const { t } = useTranslation();
  if (present === null) {
    return <p>{present}</p>;
  } else {
    return (
      <section
        className="relative m-3 mb-10 flex h-screen flex-col items-center justify-between rounded-main bg-cover bg-center px-3 text-center text-white md:rounded-2xl"
        style={{
          backgroundImage:
            "url('https://main--lighthearted-cocada-0d2e37.netlify.app/img/RandomPresentBg.svg')",
        }}
      >
        <button
          className="absolute right-5 top-5 md:right-10 md:top-10"
          onClick={() => setUserWin(false)}
        >
          <WhiteClose />
        </button>

        <h3 className="h3 mt-20 w-3/4 text-center text-xl leading-tight md:text-4xl">
          {t("win_random_section.title")}
        </h3>
        <img
          src={present.img}
          alt={present.name}
          className="absolute left-1/2 top-1/2 h-56 -translate-x-1/2 -translate-y-2/3 -rotate-6 bg-white shadow-2xl shadow-white/30 md:top-[40%] md:mt-16 md:h-60"
        />
        <div className="mb-10 flex flex-col items-center justify-center break-words md:mt-16">
          <h4 className="md:h4 mb-2 text-3xl md:text-5xl">{present.name}</h4>
          <Link to={"/"} className="additional text-blue-100 underline">
            {t("btn_know_more")}
          </Link>
          <button className="btn btn-effect secondary-bold my-2 h-12 w-max rounded-md bg-blue-700 px-8 text-white lg:w-96">
            {t("btn_make_order")}
          </button>
          <button
            className="flex"
            onClick={() => {
              setWheelRotate(true);
              setPresent(null);
              setUserWin(false);
            }}
          >
            <TryAgainIcon />
            <p className="ml-2">{t("win_random_section.btn_try_again")}</p>
          </button>
        </div>
      </section>
    );
  }
}
