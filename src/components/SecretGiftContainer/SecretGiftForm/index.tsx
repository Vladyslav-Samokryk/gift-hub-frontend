import React, { useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import { useGetCategoriesQuery } from "@src/app/api/categories";
import type { Range } from "@src/app/api/products";
import { SelectSecretGift } from "@src/components";
import { RangePrice, useGetCurrentLang } from "@src/shared";

import type { TRSecretGift } from "@src/shared/types/Translation";

export interface Category {
  value: string;
  label: string;
}

interface SecretGiftFormProps {
  setUserWin: (value: boolean) => void;
  setQuery: (value: Range | null) => void;
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
    const item = data?.find(
      (item) => item.name.toLowerCase() === category?.value.toLowerCase(),
    );
    const newQuery = { range, lang, categoryId: item?.id };
    setQuery(newQuery);
  };
  if (!data || isLoading) {
    return <p>Loading...</p>;
  }

  const options = useMemo(
    () =>
      data?.map((category) => ({
        value: category.name.toLowerCase(),
        label: category.name,
      })),
    [data],
  );

  return (
    <section
      className="mt-5 flex max-w-[650px] flex-col items-center justify-center rounded-[20px] bg-white/40 p-5 px-4 py-10"
      ref={sectionRef}
    >
      <form
        className="flex flex-col items-center justify-center "
        onSubmit={handleFormSubmit}
      >
        <div className="">
          <h5 className="md:h5 mb-5 text-2xl font-bold leading-6">
            Обери категорію подарунка:
          </h5>
          <SelectSecretGift
            options={options}
            category={category}
            setCategory={setCategory}
          />
        </div>
        <div className="mt-10 flex w-full flex-col items-center justify-center md:mt-24">
          <h5 className="md:h5  mb-3 text-center text-lg font-bold leading-6">
            Обери ціновий діапазон:
          </h5>
          <RangePrice
            permission={false}
            setRange={setRange}
            elementRef={sectionRef}
            {...range}
            className="w-[90%] md:w-[593px]"
          />
        </div>
        <button
          type="submit"
          className="btn btn-effect mt-16 w-[236px] font-rubik text-[16px] leading-6 md:w-[176px] md:px-7 py-4"
        >
          Старт
        </button>
      </form>
    </section>
  );
}
