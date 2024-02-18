import { useTranslation } from "react-i18next";

export default function EmptyCatalog() {
  const { t } = useTranslation();

  const messages = t("EmptyCatalogMsgs", { returnObjects: true });

  return (
    <section className="bg-white text-secondary-900 w-full  h-full py-[118px]  font-rubik rounded-xl max-lg:ml-4 max-lg:mr-4 ">
      {messages.map((message: string, index: number) => (
        <p
          className="text-[16px] lg:text-[24px] mb-[30px] last:mb-0 text-center odd:font-semibold even:font-light leading-7"
          key={index}
        >
          {message}
        </p>
      ))}
    </section>
  );
}
