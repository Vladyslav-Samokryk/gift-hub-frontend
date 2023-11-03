import { SCREEN, useScreenWidth } from "@src/shared";
import { useTranslation } from "react-i18next";

export default function EnterAsSection({
  icon,
}: {
  icon: JSX.Element;
}): JSX.Element {
  const { t } = useTranslation();
  const windowWidth = useScreenWidth();
  return (
    <>
      <div className="relative my-3 w-full py-5 md:mx-2 md:h-[90%] md:w-[2px]">
        <div className=" h-[1.5px] w-full bg-gray-900 md:h-full md:w-[1.5px]" />
        <p className="absolute left-1/2 top-[10%] -translate-x-1/2 bg-white md:top-[30%]">
          {t("or")}
        </p>
      </div>

      <div className="md:mt-6">
        <h5>{t("enter_as_header")}</h5>
        <button>Google</button>
        <button>Facebook</button>
        {windowWidth > SCREEN.MD ? icon : null}
      </div>
    </>
  );
}
