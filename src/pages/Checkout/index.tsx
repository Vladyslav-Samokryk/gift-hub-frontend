import { CURRENCY } from "app/api/config";
import { useTranslation } from "react-i18next";
import CheckoutCard from "shared/UI/CheckoutCard";
import InputContainer from "shared/UI/InputContainer";
import ListBlock from "shared/UI/ListBlock";
import { getTotalPrice } from "shared/helpers/price";
import useGetCartItems from "shared/hooks/useGetCartItems";

function Checkout(): JSX.Element {
  const cart = useGetCartItems();
  const { t } = useTranslation();
  return (
    <div className="mb-3 px-[3vw]">
      <h1 className="h5 mb-5 text-center">{t("checkout.title")}</h1>
      <section className="flex flex-col-reverse gap-5 lg:flex-row">
        <form className="flex w-full flex-col gap-5 lg:w-[60%]">
          <ListBlock
            index="1"
            indexStyle="after:content-bobble1"
            title={t("checkout.section.info")}
            className="grid grid-cols-2 gap-x-5 gap-y-8"
          >
            <InputContainer label="1" inputValue="" setInputValue={() => {}}>
              <input className="h-full w-full pr-8 focus:outline-none" />
            </InputContainer>
            <InputContainer label="2" inputValue="" setInputValue={() => {}}>
              <input className="h-full w-full pr-8 focus:outline-none" />
            </InputContainer>
            <InputContainer label="3" inputValue="" setInputValue={() => {}}>
              <input className="h-full w-full pr-8 focus:outline-none" />
            </InputContainer>
            <InputContainer label="4" inputValue="" setInputValue={() => {}}>
              <input className="h-full w-full pr-8 focus:outline-none" />
            </InputContainer>
          </ListBlock>
          <ListBlock
            index="2"
            indexStyle="after:content-bobble2"
            title={t("checkout.section.delivery.title")}
          >
            <div className="flex justify-between">
              <div>
                <input type="radio" name="delivery" />
                <label>{t("checkout.section.delivery.self")}</label>
              </div>
              <p>{t("checkout.section.delivery.price.free")}</p>
            </div>

            <div className="flex justify-between">
              <div>
                <input type="radio" name="delivery" />
                <label>{t("checkout.section.delivery.nova_poshta")}</label>
              </div>
              <p>{t("checkout.section.delivery.price.by_tariff")}</p>
            </div>

            <div className="flex justify-between">
              <div>
                <input type="radio" name="delivery" />
                <label>{t("checkout.section.delivery.urk_poshta")}</label>
              </div>
              <p>{t("checkout.section.delivery.price.by_tariff")}</p>
            </div>
          </ListBlock>
          <ListBlock
            index="3"
            indexStyle="after:content-bobble3"
            title={t("checkout.section.payment.title")}
          >
            <div>
              <input type="radio" name="payment" />
              <label>{t("checkout.section.payment.cash")}</label>
            </div>
            <div>
              <input type="radio" name="payment" />
              <label>{t("checkout.section.payment.card")}</label>
            </div>
          </ListBlock>
          <ListBlock
            index="+"
            indexStyle="after:content-bobble3"
            title={t("checkout.section.additional.title")}
          >
            <div>
              <input type="checkbox" />
              <label>{t("checkout.section.additional.add_comment")}</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>{t("checkout.section.additional.not_recall")}</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>{t("checkout.section.additional.another_person")}</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>{t("checkout.section.additional.present")}</label>
            </div>
          </ListBlock>
          <button className="btn btn-effect mx-auto">
            {t("checkout.btn")}
          </button>
        </form>

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
