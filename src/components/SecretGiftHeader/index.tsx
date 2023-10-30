import { Basket, UserAccount, Wishlist } from "@src/shared";
import { GoMainPageArrow } from "@src/shared/assets/svg/Arrows";
import type { TRSecretGift } from "@src/shared/types/Translation";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export default function SecretGiftHeader(): JSX.Element {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const secretGift: TRSecretGift = t("secret_gift", {
    returnObjects: true,
  });
  return (
    <section className="mb:1 mt:1 relative flex w-full items-start justify-between md:mb-6 md:mt-8 md:h-28 md:px-5 lg:mb-1 lg:h-fit">
      <div className="flex items-center justify-start gap-1">
        <button
          className="group top-3 m-1 flex h-9 w-9 items-center justify-center rounded-full hover:bg-blue-700"
          onClick={() => navigate("/")}
        >
          <GoMainPageArrow />
        </button>
        <h6 className="md:h6 text-sm leading-6">{secretGift.header_link}</h6>
      </div>
      <section className="flex w-36 justify-between self-center">
        <button className="group flex h-9 w-9 items-center justify-center rounded-full hover:bg-blue-900">
          <UserAccount />
        </button>
        <button className="group flex h-9 w-9 items-center justify-center rounded-full hover:bg-blue-900">
          <Wishlist />
        </button>
        <button className="group flex h-9 w-9 items-center justify-center rounded-full hover:bg-blue-900">
          <Basket type="sm" className="fill-black group-hover:fill-white" />
        </button>
      </section>
    </section>
  );
}
