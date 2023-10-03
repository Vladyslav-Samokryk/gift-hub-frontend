import { CURRENCY } from "@src/app/config";
import { ProductCard } from "@src/components";
import { productCardMock } from "@src/mock";
import { Plus, type ProductCardType } from "@src/shared";

function SortCatalog (): JSX.Element {
  return <section className="additional flex h-10 w-full items-center justify-between rounded-md bg-white pl-1 pr-[34%]">
    <p className="text-gray-900">show first:</p>
    <p>cheap</p>
    <p>lux</p>
    <p>new</p>
    <p>popular</p>
    <p>rate</p>
  </section>;
}

function FiltersCatalog (): JSX.Element {
  return <section className="h-max divide-y-2 rounded-md bg-white px-3 py-2">
    <div>
      <h3>show first:</h3>
      <p>cheap</p>
      <p>lux</p>
      <p>new</p>
    </div>
    <div>
      <h3>show first:</h3>
      <p>cheap</p>
      <p>lux</p>
      <p>new</p>
    </div>
    <div>
      <h3>show first:</h3>
      <p>cheap</p>
      <p>lux</p>
      <p>new</p>
    </div>
  </section>;
}

function NavigatePath (): JSX.Element {
  return <section>
        посилання
  </section>;
}

function BuyTogetherSection (): JSX.Element {
  let total = 0;
  return <section >
    <h4 className="primary-bold">Buy together</h4>
    <div className="flex justify-between items-center">
      {productCardMock.map((product: ProductCardType, index: number) => {
        total += product.price;
        return <>
          <ProductCard key={product.id} {...product}/>
          {index < productCardMock.length - 1 ? <Plus/> : null}
        </>;
      })}

      <div>
        <h5 className="primary">Total: <span className="h5">{total} {CURRENCY}</span></h5>
        <button className="btn-effect btn">Add to basket</button>
      </div>
    </div>

  </section>;
}

export default function Catalog (): JSX.Element {
  return (
    <div className="m-auto p-5">

      <NavigatePath/>

      <section className="grid grid-cols-[260px_1fr] gap-6">
        <FiltersCatalog/>
        <div>
          <SortCatalog/>
          <div>
            <div className="mt-3 flex flex-wrap justify-between gap-7">
              {productCardMock.map((product: ProductCardType) => {
                return <ProductCard key={product.id} {...product}/>;
              })}
            </div>
            <div>pagination</div>
          </div>
        </div>
      </section>

      <hr/>

      <BuyTogetherSection/>

    </div>
  );
}
