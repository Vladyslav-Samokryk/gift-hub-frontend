import { useAppSelector } from "@src/app/store";
import { selectCart } from "@src/app/store/cart/cartSlice";
import { UserAccount, Wishlist, Basket } from "@src/shared";

interface UserSectionProps {
  accountClick?: () => void;
}

const UserSection = ({ accountClick }: UserSectionProps): JSX.Element => {
  const cart = useAppSelector(selectCart);
  return (
    <section className="flex w-36 justify-between self-center">
      <button
        className="group flex h-9 w-9 items-center justify-center rounded-full hover:bg-blue-800"
        onClick={accountClick}
      >
        <UserAccount />
      </button>
      <button className="group flex h-9 w-9 items-center justify-center rounded-full hover:bg-blue-800">
        <Wishlist />
      </button>
      <button className="group relative flex h-9 w-9 items-center justify-center rounded-full hover:bg-blue-900">
        {cart.length > 0 && (
          <div className=" absolute right-0 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-blue-700">
            <span className="text-[10px] text-white">{cart.length}</span>
          </div>
        )}

        <Basket type="sm" className="fill-black group-hover:fill-white" />
      </button>
    </section>
  );
};

export default UserSection;
