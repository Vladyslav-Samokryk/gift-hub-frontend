import { useGetCategoryIdQuery } from "app/api/categories";
import { useGetProductsByCategoryQuery } from "app/api/products";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
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
import { useDispatch } from "react-redux";
import { setCount } from "app/store/slices/catalog";
import { useCookies } from "react-cookie";

export default function CatalogByCategory(): JSX.Element {
  const { id } = useParams();
  const lang = useGetCurrentLang();
  const { data: categoryId } = useGetCategoryIdQuery(id ?? "");
  const searchParams = getSearchParams();
  const catalog = useAppSelector((state) => state.catalog);
  const dispatch = useDispatch();
  const [cookies] = useCookies();
  const { data } = useGetProductsByCategoryQuery(
    {
      category: {
        categoryId: categoryId ?? "",
        main: handleQueryParamArray(searchParams.main),
        rate: handleQueryParamArray(searchParams.rate),
        priceFrom: prepareQueryParam(searchParams.priceFrom),
        priceTo: prepareQueryParam(searchParams.priceTo),
        sort: prepareQueryParam(searchParams.sort),
        lang,
        page: catalog.page,
        productNum: catalog.productNum,
      },
      token: cookies.access,
    },
    {
      skip: !categoryId ?? false,
    },
  );
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
