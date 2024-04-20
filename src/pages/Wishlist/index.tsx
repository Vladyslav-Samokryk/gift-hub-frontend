import {
  useAddToBasketMutation,
  useDeleteFromWishlistMutation,
  useGetUserWishlistQuery,
} from "app/api/products";
import { MODALS } from "app/context/modalContext/modals";
import { useModals } from "app/context/modalContext/useModals";
import ProductCard from "components/ProductCard";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useTranslation } from "react-i18next";
import { EmptyBasketIcon } from "shared/assets/svg/Basket";
import { useGetCurrentLang } from "shared/hooks/useGetCurrentLang";
import type { ProductCardType } from "shared/types/ProductTypes";

export default function WishlistPage(): JSX.Element {
  const [cookies] = useCookies();
  const { t } = useTranslation();
  const lang = useGetCurrentLang();
  const [deleteFromWishlist] = useDeleteFromWishlistMutation();
  const [addToBasket] = useAddToBasketMutation();
  const { data, refetch } = useGetUserWishlistQuery({
    token: cookies.access,
    lang,
  });
  const { onOpen } = useModals();

  const handleAddToBasket = (): void => {
    void addToBasket({
      products: data?.map((el: ProductCardType) => {
        return {
          product_id: el.id,
          amount: 1,
        };
      }),
      token: cookies.access,
    })
      .unwrap()
      .then(() => onOpen({ name: MODALS.BASKET }));
  };

  const handleDeleteAllFromWishlist = (): void => {
    void deleteFromWishlist({
      token: cookies.access,
      id: data?.map((el: ProductCardType) => el.id),
    })
      .unwrap()
      .then(async () => await refetch());
  };

  useEffect(() => {
    void refetch();
  }, []);

  const getNewWishlist = async (): Promise<void> => {
    await refetch();
  };

  return (
    <>
      {data?.length ? (
        <>
          <ul className="flex flex-wrap justify-evenly gap-5 ">
            {data?.map((product: ProductCardType) => (
              <li key={product.id}>
                <ProductCard {...product} refetch={getNewWishlist} />
              </li>
            ))}
          </ul>
          <div className="[&>button]:btn mt-5 flex flex-col items-center justify-center gap-5 sm:flex-row [&>button]:border-2 [&>button]:border-blue-700 hover:[&>button]:border-blue-800">
            <button
              type="button"
              className="!bg-white !text-blue-700"
              onClick={handleDeleteAllFromWishlist}
            >
              {t("wishlist.btn_delete")}
            </button>
            <button
              type="button"
              className="btn-effect"
              onClick={handleAddToBasket}
            >
              {t("wishlist.btn_add")}
            </button>
          </div>
        </>
      ) : (
        <section className="flex flex-col items-center text-secondary-900">
          <EmptyBasketIcon />
          <p className="primary-bold">{t("wishlist.header")}</p>
          <p className="secondary">{t("wishlist.description")}</p>
        </section>
      )}
    </>
  );
}
