import { UserAccount, Wishlist, Basket } from "@src/shared";

interface UserSectionProps {
  accountClick?: () => void;
}

const UserSection = ({ accountClick }: UserSectionProps): JSX.Element => {
  return (
    <section className="flex w-36 justify-between self-center">
      <button
        className="group flex h-9 w-9 items-center justify-center rounded-full hover:bg-blue-900"
        onClick={accountClick}
      >
        <UserAccount />
      </button>
      <button className="group flex h-9 w-9 items-center justify-center rounded-full hover:bg-blue-900">
        <Wishlist />
      </button>
      <button className="group flex h-9 w-9 items-center justify-center rounded-full hover:bg-blue-900">
        <Basket type="sm" className="fill-black group-hover:fill-white" />
      </button>
    </section>
  );
};

export default UserSection;
