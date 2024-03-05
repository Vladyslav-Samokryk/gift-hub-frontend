import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export default function NotFound(): JSX.Element {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <section className="px-16 py-24">
      <h2 className="text-purple-900 text-[100px] lg:text-[250px]  text-center font-medium leading-[120px] lg:leading-[300px] mb-4 lg:mb-2">
        404
      </h2>
      {Array.from({ length: 2 }).map((_, idx) => (
        <p className="text-center even:h6 even:lg:h5 even:font-semibold mb-7 odd:additional odd:font-light odd:text-gray-900 odd:lg:h6" key={idx}>
          {t("not_found_content")[idx]}
        </p>
      ))}

      <button type="button"
        onClick={() => navigate("/")}
        className="block btn btn-effect text-center mx-auto rounded"
      >
        <p className="mobile-font font-medium lg:secondary">{t("go_to_the_main_page")}</p>
      </button>
    </section>
  );
}
