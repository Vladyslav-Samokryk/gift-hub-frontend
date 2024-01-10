import { CURRENCY } from "app/api/config";
import CheckoutForm from "components/CheckoutForm";
import { useTranslation } from "react-i18next";
import CheckoutCard from "shared/UI/CheckoutCard";
import { getTotalPrice } from "shared/helpers/price";
import useGetCartItems from "shared/hooks/useGetCartItems";

function Checkout(): JSX.Element {
  const cart = useGetCartItems();
  const { t } = useTranslation();

  return (
    <div className="mb-3 px-[3vw]">
      <h1 className="h5 mb-5 text-center">{t("checkout.title")}</h1>
      <section className="flex flex-col-reverse gap-5 lg:flex-row">
        <CheckoutForm />
        <div className="flex w-full flex-col gap-5 rounded-md bg-white p-4 lg:w-[40%]">
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
  );
}

export default Checkout;
