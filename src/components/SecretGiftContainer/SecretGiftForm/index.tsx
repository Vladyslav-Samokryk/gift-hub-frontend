import React, { useEffect, useMemo, useRef, useState } from "react";

import { useGetCategoriesQuery } from "@src/app/api/categories";
import type { Range } from "@src/app/api/products";
import { SelectSecretGift } from "@src/components";
import type { Categories } from "@src/shared";
import { RangePrice, useGetCurrentLang } from "@src/shared";

import { getRandomNumber } from "@src/components/RandomPresent/RandomWheel/helpers";

export interface Category {
  value: string;
  label: string;
}

interface SecretGiftFormProps {
  setUserWin: (value: boolean) => void;
  setQuery: (value: Range | null) => void;
  setIsAnimation: (value: boolean) => void;
}
export default function SecretGiftForm({
  setUserWin,
  setQuery,
  setIsAnimation,
}: SecretGiftFormProps): JSX.Element {
  const lang = useGetCurrentLang();
  const sectionRef = useRef<HTMLDivElement>(null);

  const [range, setRange] = useState({
    from: 200,
    to: 700,
  });
  const [category, setCategory] = useState<Category | null>(null);

  const { data } = useGetCategoriesQuery(lang);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setUserWin(true);
    setIsAnimation(true);
    const item = findItem();
    const newQuery = { range, lang, categoryId: item?.id ?? "" };
    setQuery(newQuery);
    // handleAnimation();
  };

  function handleAnimation(): void {
    setTimeout(() => {
      setIsAnimation(false);
    }, getRandomNumber());
  }

  function findItem(): Categories | undefined {
    return data?.find(
      (item) => item.name.toLowerCase() === category?.value.toLowerCase(),
    );
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
          className="btn btn-effect mt-16 w-[236px] py-4 font-rubik text-[16px] leading-6 md:w-[176px] md:px-7"
        >
          Старт
        </button>
      </form>
    </section>
  );
}
