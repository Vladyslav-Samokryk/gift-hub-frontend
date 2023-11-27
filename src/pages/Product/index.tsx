import { CURRENCY } from "@src/app/api/config";
import {
  useGetOneProductQuery,
  useGetOneProductCommentsQuery,
} from "@src/app/api/products";
import { Breadcrumbs } from "@src/components";
import { StarRate, Wishlist, useGetCurrentLang } from "@src/shared";
import { CommentsNotFoundIcon } from "@src/shared/assets/svg/Comments";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

export default function Product(): JSX.Element {
  const { id } = useParams();
  const lang = useGetCurrentLang();
  const [page, setPage] = useState(1);
  const { t } = useTranslation();
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
      page,
    },
    {
      skip: !id ?? false,
    },
  );

  if (!data) {
    return <p></p>;
  }

  return (
    <>
      <Breadcrumbs />
      <section>
        <div>
          <h1 className="h2">{data.name}</h1>
          <p className="h6 font-light">{t("product_code")}</p>
          <StarRate rate={data.global_rating} />
        </div>
        <div>
          <img src={data.img} alt={data.name} />
          {Array.isArray(data?.img) &&
            data.img.map((src, index) => {
              return index > 0 ? <img src={src} alt={src} /> : null;
            })}
        </div>
        <div>
          <h2 className="h2">
            {data.price} {CURRENCY}
          </h2>
          <p>{t("availability._true")}</p>
          <div>
            <button className="btn btn-effect">{t("btn_add_to_basket")}</button>
            <Wishlist />
          </div>
        </div>
      </section>

      <section>
        <div></div>
        <div></div>
      </section>

      <section>
        <div>
          <h4>{t("comments.header")}</h4>
          <button className="btn btn-effect">
            {t("comments.write_comment.header")}
          </button>
        </div>
        <div></div>
      </section>

      <section>
        <h5>{t("comments.all_comments")}</h5>
        {comments?.length ? (
          <div></div>
        ) : (
          <div className="text-secondary-900 flex w-full flex-col items-center text-center">
            <CommentsNotFoundIcon />
            <p className="h6 font-light">{t("comments.non_found.header")}</p>
            <h4 className="h5">{t("comments.non_found.description")}</h4>
          </div>
        )}
      </section>

      <section>
        <h2 className="h5">{t("product_sections.reviewed")}</h2>
      </section>
    </>
  );
}
