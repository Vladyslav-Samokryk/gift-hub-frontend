import { CURRENCY } from "@src/app/api/config";
import {
  useGetOneProductQuery,
  useGetOneProductCommentsQuery,
} from "@src/app/api/products";
import { Breadcrumbs } from "@src/components";
import DescriptionContainer from "@src/components/DecrtiptionContainer";
import RateScore from "@src/components/RateScore";
import {
  ProductSection,
  SCREEN,
  StarRate,
  Wishlist,
  useGetCurrentLang,
  useScreenWidth,
} from "@src/shared";
import ImageSlider from "@src/shared/UI/ImageSlider";
import { CommentsNotFoundIcon } from "@src/shared/assets/svg/Comments";
import { getRateWithStars } from "@src/shared/helpers/rate";
import type { TRCriteria } from "@src/shared/types/Translation";
import classNames from "classnames";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

export default function Product(): JSX.Element {
  const { id } = useParams();
  const lang = useGetCurrentLang();
  const { t } = useTranslation();
  const width = useScreenWidth();

  const criterias: TRCriteria = t("rate_by_criteria", {
    returnObjects: true,
  });
  const { data } = useGetOneProductQuery(
    {
      id: id ?? "",
      lang,
    },
    {
      skip: !id ?? false,
    },
  );

  const { data: comments } = useGetOneProductCommentsQuery(
    {
      id: id ?? "",
      page: 1,
    },
    {
      skip: !id ?? false,
    },
  );

  if (!data) {
    return <p></p>;
  }
  return (
    <section className="flex flex-col justify-center gap-6 px-[2vw]">
      {width > SCREEN.LG && <Breadcrumbs product={data.name} />}
      <section className="gap-5 grid grid-cols-1 lg:grid-cols-[1fr,45vw,1fr]">
        <div>
          <h1 className="lg:h5 h6">{data.name}</h1>
          <div className="flex gap-10 lg:block">
            <p className="lg:h6 secondary font-light">
              {t("product_code")} {data.code}
            </p>
            <StarRate rate={data.global_rating} />
          </div>
        </div>
        <ImageSlider images={data?.img} />
        <div className="flex justify-between lg:block">
          <div className="flex flex-col-reverse lg:flex-col">
            <h2 className="lg:h4 h6">
              {data.price} {CURRENCY}
            </h2>
            <p
              className={classNames({
                "text-accent-green": data.quantity > 0,
                "text-accent-red": data.quantity < 0,
              })}
            >
              {data.quantity > 0
                ? t("availability._true")
                : t("availability._false")}
            </p>
          </div>
          <div className="flex flex-row-reverse items-end gap-10 lg:flex-row lg:items-center">
            <button className="btn btn-effect">{t("btn_to_basket")}</button>
            <button className="h-8">
              <Wishlist />
            </button>
          </div>
        </div>
      </section>
      <DescriptionContainer description={data.description} />
      <section>
        <div className="flex justify-between">
          <h4 className="md:h5 h6">{t("comments.header")}</h4>
          {/*           <button className="btn btn-effect">
            {t("comments.write_comment.header")}
          </button> */}
        </div>
      </section>
      <section className="rounded-md bg-purple-100 p-4 md:p-10">
        <div className="flex w-72 items-start justify-between gap-5 border-b-2 border-blue-200 pb-3 md:pb-5">
          <div>
            <p className="h6">{t("global_rate")}</p>
            <StarRate rate={data.global_rating} />
          </div>
          <p className="w-1/3 self-center font-rubik text-4xl font-bold text-blue-900">
            {data.global_rating}
          </p>
        </div>

        <div className="secondary md:primary grid divide-y-2 divide-blue-200 md:grid-cols-2 md:gap-[30vw] md:divide-y-0">
          <RateScore
            data={data.rate_by_criteria}
            max={100}
            labels={Object.values(criterias)}
          />
          <RateScore
            labels={getRateWithStars(Object.keys(data.rate_by_stars))}
            data={data.rate_by_stars}
            max={Object.values(data.rate_by_stars).reduce(
              (sum, el) => (sum += el),
              0,
            )}
            isStatic
          />
        </div>
      </section>
      <section>
        <h5 className="md:h6 primary">
          {t("comments.all_comments")}: ({comments?.count})
        </h5>
        {comments?.count ? (
          <div>
            {comments?.results.map((comment, index) => {
              return (
                <div
                  className="my-5 grid gap-3 divide-y-2 rounded-md bg-white p-5 md:grid-cols-[1fr,3fr,2fr] md:divide-x-2 md:divide-y-0"
                  key={index}
                >
                  <div>
                    <p className="primary">{comment.author}</p>
                    <p className="secondary font-light text-gray-900">
                      {comment.date}
                    </p>
                    <StarRate rate={comment.global_rate} />
                  </div>

                  <div className="px-2">
                    <p>{comment.text}</p>
                  </div>

                  <div className="px-2">
                    <RateScore
                      data={comment.rate_by_criteria}
                      max={100}
                      labels={Object.values(criterias)}
                      isValueHidden
                    />
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="flex w-full my-10 flex-col items-center text-center text-secondary-900">
            <CommentsNotFoundIcon />
            <p className="h6 font-light">{t("comments.non_found.header")}</p>
            <h4 className="h5">{t("comments.non_found.description")}</h4>
          </div>
        )}
      </section>

      {/*       <ProductSection
        products={productCardMock}
        title={t("product_sections.reviewed")}
      /> */}
    </section>
  );
}
