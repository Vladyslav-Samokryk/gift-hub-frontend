import { useTranslation } from "react-i18next";
import "../../../app/styles/index.scss"

export default function EmptyCatalog() {
  const { t } = useTranslation();

  const messages = t("empty_catalog", { returnObjects: true });

  return (
    <section className="bg-white text-secondary-900 w-full  h-full py-28  font-rubik rounded-xl max-lg:ml-4 max-lg:mr-4 ">
      {messages.map((message: string, index: number) => (
        <p
          className="additional lg:secondary mb-8 last:mb-0 text-center odd:font-semibold even:font-light leading-7"
          key={index}
        >
          {message}
        </p>
      ))}
    </section>
  );
}
