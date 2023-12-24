import { ProductCard } from "@components";
import {
  SeeMoreButton,
  type ProductCardType,
  useHorizontalScroll,
} from "@shared";
import { useNavigate } from "react-router-dom";

interface ProductSectionProps {
  linkPath?: string;
  products: ProductCardType[];
  title: string;
}

export default function ProductSection({
  linkPath,
  products,
  title,
}: ProductSectionProps): JSX.Element {
  const scrollRef = useHorizontalScroll();
  const navigate = useNavigate();

  if (!products) return <></>;

  return (
    <section className="my-10 md:my-20 w-full">
      <h5 className="md:h5 h6 text-center">{title}</h5>
      <div
        className="no-scrollbar my-10 flex overflow-scroll px-2 before:m-auto after:m-auto"
        ref={scrollRef}
        style={{ scrollbarWidth: "none" }}
      >
        {products.map((product: ProductCardType) => {
          return <ProductCard key={product.id} {...product} />;
        })}
      </div>
      {linkPath && (
        <SeeMoreButton
          onClick={() => {
            navigate(linkPath);
            window.scrollTo(0, 0);
          }}
        />
      )}
    </section>
  );
}
