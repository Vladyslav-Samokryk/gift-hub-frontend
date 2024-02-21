import { useTranslation } from "react-i18next";

export default function EmptyCatalog(): JSX.Element {
  const { t } = useTranslation();

  return (
    <section className="h-full w-full rounded-xl bg-white py-28 text-secondary-900 max-lg:mx-4">
      {Array.from({ length: 3 }).map((_, index) => (
        <p
          key={index}
          className="additional lg:secondary mb-8 text-center leading-7 last:mb-0 odd:font-semibold even:font-light"
        >
          {t("empty_catalog")[index]}
        </p>
      ))}
    </section>
  );
}
