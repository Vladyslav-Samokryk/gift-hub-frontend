import type { Dispatch, SetStateAction } from "react";
import React, { useMemo, useState } from "react";

import { useGetCategoriesQuery } from "app/api/categories";
import type { RangeT } from "app/api/products";
import SelectSecretGift from "components/SelectSecretGift";
import { useTranslation } from "react-i18next";
import { useGetCurrentLang } from "shared/hooks/useGetCurrentLang";
import type { Categories } from "shared/types/Categories";
import RangePriceRandom from "shared/UI/Range/RangePriceRandom";

export interface Category {
  value: string;
  label: string;
}

interface SecretGiftFormProps {
  setUserWin: Dispatch<SetStateAction<boolean>>;
  setQuery: Dispatch<SetStateAction<RangeT | null>>;
  setIsAnimation: Dispatch<SetStateAction<boolean>>;
}
export default function SecretGiftForm({
  setUserWin,
  setQuery,
  setIsAnimation,
}: SecretGiftFormProps): JSX.Element {
  const lang = useGetCurrentLang();
  const { t } = useTranslation();

  const [range, setRange] = useState({
    from: 200,
    to: 700,
  });

  const { data } = useGetCategoriesQuery(lang);
  const [category, setCategory] = useState<Category>();

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setUserWin(true);
    setIsAnimation(true);
    const item = findItem();
    const newQuery = { range, lang, categoryId: item?.id ?? "", quantity: 1 };
    setQuery(newQuery);
    handleAnimation();
  };

  function handleAnimation(): void {
    setTimeout(() => {
      setIsAnimation(false);
    }, 5000);
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
    <section className="my-10 flex w-[90%] flex-col items-center justify-center rounded-3xl bg-white/40 px-4 py-10 md:w-[650px]">
      <form
        className="flex flex-col items-center justify-center"
        onSubmit={handleFormSubmit}
      >
        <div>
          <h5 className="md:h5 secondary-bold mb-5 text-center">
            {t("secret_gift.select_category")}
          </h5>
          <SelectSecretGift
            options={options}
            category={category}
            setCategory={setCategory}
          />
        </div>
        <div className="mt-10 flex w-full flex-col items-center justify-center">
          <h5 className="md:h5 secondary-bold mb-3 text-center">
            {t("secret_gift.select_price")}
          </h5>
          <RangePriceRandom
            permission={false}
            setRange={setRange}
            {...range}
            className="w-[90%] md:w-[500px]"
          />
        </div>
        <button
          type="submit"
          className="btn btn-effect mt-3 w-60 bg-purple-900 py-4"
          disabled={!category}
        >
          {t("secret_gift.btn_start")}
        </button>
      </form>
    </section>
  );
}
