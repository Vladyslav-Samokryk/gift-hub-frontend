import { CURRENCY } from "app/api/config";
import CheckoutForm from "components/CheckoutForm";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import CheckoutCard from "shared/UI/CheckoutCard";
import { CheckoutIcon } from "shared/assets/svg/CheckoutIcon";
import { getTotalPrice } from "shared/helpers/price";
import useGetCartItems from "shared/hooks/useGetCartItems";

function Checkout(): JSX.Element {
  const cart = useGetCartItems();
  const [checkoutIsSuccess, setCheckoutIsSuccess] = useState<
    boolean | undefined
  >(false);
  const { t } = useTranslation();

  return (
    <div>
      {!checkoutIsSuccess ? (
        <div className="mb-3 px-[3vw]">
          <h1 className="h5 mb-5 text-center">{t("checkout.title")}</h1>
          <section className="flex flex-col-reverse gap-5 lg:flex-row">
            <CheckoutForm setCheckoutIsSuccess={setCheckoutIsSuccess} />
            <div className="flex h-fit w-full flex-col gap-5 rounded-md bg-white p-4 lg:w-[40%]">
              <h6 className="h6">{t("checkout.bill.title")}</h6>
              {cart ? (
                cart.map((item) => <CheckoutCard key={item.id} {...item} />)
              ) : (
                <></>
              )}
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
