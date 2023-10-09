import { useTranslation } from "react-i18next";

export default function GoToSaleButton(): JSX.Element {
  const { t } = useTranslation();
  return (
    <button className="btn-effect secondary-bold sm:primary-bold absolute inset-x-0 bottom-5 z-20 m-auto w-40 rounded-lg bg-black py-2 text-white sm:static ">
      {t("btn_go_sale")}
    </button>
  );
}
