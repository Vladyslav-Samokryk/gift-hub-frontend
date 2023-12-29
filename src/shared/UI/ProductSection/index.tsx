import { useNavigate } from "react-router-dom";
import ProductCard from "components/ProductCard";
import { useHorizontalScroll } from "shared/hooks/useHorizontalScroll";
import type { ProductCardType } from "shared/types/ProductTypes";
import SeeMoreButton from "shared/UI/Buttons/SeeMoreButton";

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
    <section className="my-10 w-full md:my-20">
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
