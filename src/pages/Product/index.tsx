import { CURRENCY } from "app/api/config";
import {
  useGetOneProductQuery,
  useGetOneProductCommentsQuery,
  useGetProductsByIdQuery,
  useAddToBasketMutation,
  useAddToWishlistMutation,
  useDeleteFromWishlistMutation,
} from "app/api/products";
import { addToCart } from "app/store/cart/cartSlice";
import DescriptionContainer from "components/DecrtiptionContainer";
import RateScore from "components/RateScore";

import ImageSlider from "shared/UI/ImageSlider";
import { CommentsNotFoundIcon } from "shared/assets/svg/Comments";
import { getRateWithStars } from "shared/helpers/rate";
import type { TRCriteria } from "shared/types/Translation";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Breadcrumbs from "components/Breadcrumbs";
import StarRate from "shared/UI/StarRate";
import { Wishlist } from "shared/assets/svg/Wishlist";
import { SCREEN } from "shared/constants/screens";
import { useGetCurrentLang } from "shared/hooks/useGetCurrentLang";
import { useScreenWidth } from "shared/hooks/useScreenWidth";
import classNames from "classnames";
import { useEffect, useState } from "react";
import ProductSection from "shared/UI/ProductSection";
import { useCookies } from "react-cookie";
import { useModals } from "app/context/modalContext/useModals";
import { MODALS } from "app/context/modalContext/modals";
import { useAuth } from "shared/hooks/useAuth";
import { incrementBy } from "app/store/cart/authCartSlice";

export default function Product(): JSX.Element {
  const { id } = useParams();
  const lang = useGetCurrentLang();
  const { t } = useTranslation();
  const width = useScreenWidth();
  const dispatch = useDispatch();
  const reviewed: string[] = JSON.parse(
    localStorage.getItem("reviewed") ?? "[]",
  );
  const [cookies] = useCookies();
  const [addToBasket] = useAddToBasketMutation();
  const [addToWishlist] = useAddToWishlistMutation();
  const [deleteFromWishlist] = useDeleteFromWishlistMutation();
  const [isProductInWishlist, setIsProductInWishlist] = useState(false);
  const { onOpen } = useModals();
  const { isAuth } = useAuth();

  useEffect(() => {
    if (id) {
      if (reviewed.length === 0) {
        localStorage.setItem("reviewed", JSON.stringify([id]));
      }

      if (!reviewed.includes(id)) {
        localStorage.setItem("reviewed", JSON.stringify([...reviewed, id]));
      }
       localStorage.setItem("productID", JSON.stringify([id]))
    }
  }, []);


  const { data: reviewedProducts } = useGetProductsByIdQuery(
    {
      productIds: reviewed.filter((pId) => pId !== id),
      lang,
    },
    {
      skip: !id ?? false,
    },
  );

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

  const handleAddToCart = (): void => {
    if (data) {
      if (isAuth) {
        void addToBasket({
          products: [
            {
              product_id: data.id,
              amount: 1,
            },
          ],
          token: cookies.access,
        });
        dispatch(incrementBy([data.id]));
      } else {
        dispatch(addToCart(data.id));
      }
    }
  };

  const handleWishlistAction = (): void => {
    void (isAuth && data
      ? !isProductInWishlist
        ? addToWishlist({ id: data.id, token: cookies.access })
        : deleteFromWishlist({ id: data.id, token: cookies.access })
      : onOpen({
          name: MODALS.LOGIN,
          data: { error: true },
        }));
    setIsProductInWishlist((prev) => !prev);
  };

  if (!data) {
    return <p></p>;
  }
  return (
    <section className="flex flex-col justify-center gap-6 px-[2vw]">
      {width > SCREEN.LG && <Breadcrumbs product={data.name} />}
      <section className="grid grid-cols-1 gap-5 lg:grid-cols-[1fr,45vw,1fr]">
        <div>
          <h1 className="lg:h5 h6">{data.name}</h1>
          <div className="flex gap-5 md:gap-10 lg:block">
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
            <button
              className="btn btn-effect"
              onClick={() => handleAddToCart()}
            >
              {t("btn_to_basket")}
            </button>
            <button className="h-8" onClick={handleWishlistAction}>
              <Wishlist inWishlist={isProductInWishlist} />
            </button>
          </div>
        </div>
      </section>
      <DescriptionContainer description={data.description} />
      <section>
        <div className="flex justify-between">
          <h4 className="md:h5 h6">{t("comments.header")}</h4>
          {isAuth && (
            <button
              className="btn btn-effect"
              onClick={() => onOpen({ name: MODALS.COMMENT })}
            >
              {t("comments.write_comment.header")}
            </button>
          )}
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
              (sum: number, el: number) => (sum += el),
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
          <div className="my-10 flex w-full flex-col items-center text-center text-secondary-900">
            <CommentsNotFoundIcon />
            <p className="h6 font-light">{t("comments.non_found.header")}</p>
            <h4 className="h5">{t("comments.non_found.description")}</h4>
          </div>
        )}
      </section>
      {reviewedProducts && (
        <ProductSection
          products={reviewedProducts}
          title={t("product_sections.reviewed")}
        />
      )}
    </section>
  );
}
