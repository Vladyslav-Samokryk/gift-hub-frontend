import { type ProductCardType, WhiteClose, TryAgainIcon } from "@src/shared";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

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
        className="relative m-3 mb-10 flex h-screen flex-col items-center justify-between rounded-2xl bg-cover bg-center px-5 py-10 text-center text-white"
        style={{
          backgroundImage: "url('src/shared/assets/img/RandomPresentBg.svg')",
        }}
      >
        <button
          className="absolute right-4 top-4"
          onClick={() => setUserWin(false)}
        >
          <WhiteClose />
        </button>

        <h3 className="h3 md:mt-8">{t("win_random_section.title")}</h3>
        <img
          src={present.img}
          alt={present.name}
          className="absolute left-1/2 top-1/2 h-40 -translate-x-1/2 -translate-y-2/3 -rotate-6 bg-white shadow-2xl shadow-white/30 md:h-56"
        />
        <div className="flex flex-col items-center justify-center break-words">
          <h4 className="md:h4 mb-6 text-4xl">{present.name}</h4>
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
