import { useGetCategoriesQuery } from "@src/app/api/categories";
import { SelectSecretGift } from "@src/components";
import type { ProductCardType } from "@src/shared";
import { RangePrice, useGetCurrentLang } from "@src/shared";
import type { TRSecretGift } from "@src/shared/types/Translation";
import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";

export interface Category {
  value: string;
  label: string;
  categoryId: string;
}
interface SecretGiftFormProps {
  setUserWin: (value: boolean) => void;
  setQuery: (value: any | null) => void;
}
export default function SecretGiftForm({
  setUserWin,
  setQuery,
}: SecretGiftFormProps): JSX.Element {
  const { t } = useTranslation();
  const lang = useGetCurrentLang();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [range, setRange] = useState({
    from: 200,
    to: 700,
  });
  const [category, setCategory] = useState<Category | null>(null);
  const secretGift: TRSecretGift = t("secret_gift", {
    returnObjects: true,
  });

  const { data, isLoading } = useGetCategoriesQuery(lang);
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setUserWin(true);
    const newQuery = { range, lang, categoryId: category?.categoryId };
    setQuery(newQuery);
  };

  if (!data || isLoading) {
    return <p>Loading...</p>;
  }

  const options = data?.map((category) => ({
    value: category.url,
    label: category.name,
    categoryId: category.id,
  })) as Category[];

  return (
    <section
      className="mt-5 flex max-w-[650px] flex-col items-center justify-center rounded-[20px] bg-white/40 px-4 py-6"
      ref={sectionRef}
    >
      <form
        className="flex flex-col items-center justify-center "
        onSubmit={handleFormSubmit}
      >
        <div className="">
          <h5 className="h5  mb-5">Обери категорію подарунка:</h5>
          <SelectSecretGift
            options={options}
            category={category}
            setCategory={setCategory}
          />
        </div>
        <div className="mt-24 w-full">
          <h5 className="h5  mb-3 text-center">Обери ціновий діапазон:</h5>
          <RangePrice
            permission={false}
            setRange={setRange}
            elementRef={sectionRef}
            {...range}
            className="md:w-[593px]"
          />
        </div>
        <button
          type="submit"
          className="btn btn-effect mt-16 px-7 py-4 font-rubik text-[16px] leading-6"
          disabled={!!category}
        >
          Старт
        </button>
      </form>
    </section>
  );
}
