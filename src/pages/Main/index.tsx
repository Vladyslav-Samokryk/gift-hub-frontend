import { ProductCard } from "@components";
import { type Product } from "@shared";
import { useAppSelector } from "@store";

const productCardMock: Product[] = [
  {
    img: "https://www.collinsdictionary.com/images/full/paper_111691001.jpg",
    name: "Paper name",
    type: "Paper type",
    cost: 500,
    rate: 3,
  },
  {
    img: "https://www.collinsdictionary.com/images/full/paper_111691001.jpg",
    name: "Paper name",
    type: "Paper type",
    cost: 1500,
    rate: 1,
  },
];

export default function Main (): JSX.Element {
  const user = useAppSelector((state) => state.user);

  const { isAuth } = user;

  return (
    <div>
      <h2>Main</h2>
      <section className="flex">
        {productCardMock.map((el, i) => {
          return <ProductCard key={i} {...el}/>;
        })}
      </section>
    </div>
  );
}
