import { CURRENCY } from "app/api/config";
import { useGetUserBasketQuery } from "app/api/products";
import CheckoutForm from "components/CheckoutForm";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useTranslation } from "react-i18next";
import CheckoutCard from "shared/UI/CheckoutCard";
import { CheckoutIcon } from "shared/assets/svg/CheckoutIcon";
import { getTotalPrice } from "shared/helpers/price";
import { useAuth } from "shared/hooks/useAuth";
import useGetCartItems from "shared/hooks/useGetCartItems";
import type { CartFullItem } from "shared/types/Basket";

function Checkout(): JSX.Element {
  const [cookies] = useCookies();
  const cartLocal = useGetCartItems();
  const { isAuth } = useAuth();
  const { data, refetch } = useGetUserBasketQuery(
    { token: cookies.access },
    {
      skip: !isAuth,
    },
  );
  const [cart, setCart] = useState<CartFullItem[] | []>([]);
  const [checkoutIsSuccess, setCheckoutIsSuccess] = useState<
    boolean | undefined
  >(false);
  const { t } = useTranslation();

  useEffect(() => {
    if (isAuth) {
      void refetch();
      setCart(data);
    } else {
      setCart(cartLocal ?? []);
    }
  }, [isAuth, cartLocal, data]);

  return (
    <div>
      {!checkoutIsSuccess ? (
        <div className="mb-3 px-[3vw]">
          <h1 className="h5 mb-5 text-center">{t("checkout.title")}</h1>
          <section className="flex flex-col-reverse gap-5 lg:flex-row">
            <CheckoutForm setCheckoutIsSuccess={setCheckoutIsSuccess} />
            <div className="flex h-fit w-full flex-col gap-5 rounded-md bg-white p-4 lg:w-[40%]">
              <h6 className="h6">{t("checkout.bill.title")}</h6>
              {cart?.map((item) => <CheckoutCard key={item.id} {...item} />)}
              <div className="primary-bold flex justify-between text-blue-700">
                <p>{t("checkout.bill.total")}</p>
                <p>
                  {getTotalPrice(cart)} {CURRENCY}
                </p>
              </div>
            </div>
          </section>
        </div>
      ) : (
        <section className="flex h-[50vh] flex-col items-center justify-center gap-5">
          <h2 className="h5 text-center">{t("checkout.success.title")}</h2>
          <CheckoutIcon />
          <p className="primary">{t("checkout.success.description")}</p>
        </section>
      )}
    </div>
  );
}

export default Checkout;
