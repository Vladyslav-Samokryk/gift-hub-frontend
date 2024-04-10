import { CURRENCY } from "app/api/config";
import { useTranslation } from "react-i18next";
import { SecretGiftBasket } from "shared/assets/svg/SecretGift";
import { getTotalPrice } from "shared/helpers/price";
import type { CartFullItem } from "shared/types/Basket";

function CheckoutCard(product: CartFullItem): JSX.Element {
  const { t } = useTranslation();
  return (
    <li className="list-none">
      <div className="mb-3 grid h-fit grid-cols-[5fr_1fr_1fr] gap-2">
        <div className="flex gap-3">
          {product.isSecretPresent ? (
            <SecretGiftBasket />
          ) : (
            <img
              src={product.img}
              className="h-28 w-28 shrink-0 rounded-xl border border-black"
              alt={product.name}
            />
          )}
          <p className="primary">
            {product.isSecretPresent ? t("secret_gift.title") : product.name}
          </p>
        </div>

        <p className="text-gray-600">{product?.count}</p>

        <p>
          {getTotalPrice([product])} {CURRENCY}
        </p>
      </div>
      <hr />
    </li>
  );
}

export default CheckoutCard;
