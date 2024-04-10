import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export default function NotFound(): JSX.Element {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <section className="px-16 py-24">
      <h2 className="mb-4 text-center text-[100px]  font-medium leading-[120px] text-purple-900 lg:mb-2 lg:text-[250px] lg:leading-[300px]">
        404
      </h2>
      {Array.from({ length: 2 }).map((_, idx) => (
        <p
          className="even:h6 even:lg:h5 odd:additional odd:lg:h6 mb-7 text-center odd:font-light odd:text-gray-900 even:font-semibold"
          key={idx}
        >
          {t("not_found_content")[idx]}
        </p>
      ))}

      <button
        type="button"
        onClick={() => navigate("/")}
        className="btn btn-effect mx-auto block rounded text-center"
      >
        <p className="mobile-font lg:secondary font-medium">
          {t("go_to_the_main_page")}
        </p>
      </button>
    </section>
  );
}
