import { Basket, UserAccount, Wishlist } from "@src/shared";
import { GoMainPageArrow } from "@src/shared/assets/svg/Arrows";
import { useNavigate } from "react-router-dom";

export default function SecretGiftHeader(): JSX.Element {
  const navigate = useNavigate();
  return (
    <section className="mb:px-10 flex w-full items-start justify-between md:first-line:h-28 lg:mb-1 lg:h-fit">
      <div className="flex items-center justify-start gap-1">
        <button
          className="group top-[10px] m-1 flex h-9 w-9 items-center justify-center rounded-full hover:bg-blue-700"
          onClick={() => navigate("/")}
        >
          <GoMainPageArrow />
        </button>
        <h6 className="h6">Головна</h6>
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
