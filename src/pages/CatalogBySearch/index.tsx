import { useGetProductsBySearchQuery } from "app/api/products";
import { useState, useEffect } from "react";
import ProductCard from "components/ProductCard";
import { PAGINATION_LOAD } from "shared/constants/pagination";
import {
  getSearchParams,
  handleQueryParamArray,
  prepareQueryParam,
} from "shared/helpers/url";
import { useGetCurrentLang } from "shared/hooks/useGetCurrentLang";
import type { ProductCardType } from "shared/types/ProductTypes";
import EmptyCatalog from "shared/UI/EmptyCatalog";
import { useAppSelector } from "app/store";
import { setCount } from "app/store/slices/catalog";
import { useDispatch } from "react-redux";

export default function CatalogBySearch(): JSX.Element {
  const lang = useGetCurrentLang();
  const catalog = useAppSelector((state) => state.catalog);
  const dispatch = useDispatch();
  const searchParams = getSearchParams();

  const { data } = useGetProductsBySearchQuery({
    main: handleQueryParamArray(searchParams.main),
    rate: handleQueryParamArray(searchParams.rate),
    priceFrom: prepareQueryParam(searchParams.priceFrom),
    priceTo: prepareQueryParam(searchParams.priceTo),
    sort: prepareQueryParam(searchParams.sort),
    q: prepareQueryParam(searchParams.q),
    lang,
    page: catalog.page,
    productNum: catalog.productNum,
  });

  const [results, setResults] = useState<ProductCardType[]>();

  useEffect(() => {
    if (data) {
      dispatch(setCount(data?.count));
      if (catalog.paginationLoad === PAGINATION_LOAD.PAGE) {
        setResults(data.results);
      } else {
        setResults((prev) => (prev ? [...prev, ...data.results] : prev));
      }
    }
  }, [data]);

  return (
    <>
      {results?.length ? (
        results.map((product: ProductCardType) => {
          return <ProductCard key={product.id} {...product} />;
        })
      ) : (
        <EmptyCatalog />
      )}
    </>
  );
}
