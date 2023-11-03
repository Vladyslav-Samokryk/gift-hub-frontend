import { useGetOneProductQuery } from "@src/app/api/products";
import { useGetCurrentLang } from "@src/shared";
import { useParams } from "react-router-dom";

export default function Product(): JSX.Element {
  const { id } = useParams();
  const lang = useGetCurrentLang();
  const { data } = useGetOneProductQuery(
    {
      id: id ?? "",
      lang,
    },
    {
      skip: !id ?? false,
    },
  );
  console.log(data);
  return (
    <div>
      <h2>{id}</h2>
    </div>
  );
}
