import type { Children } from "@src/shared";
import {
  Breadcrumbs,
  FiltersCatalog,
  SortCatalog,
  BuyTogetherSection,
} from "@components";

export default function CatalogLayout({
  children,
}: {
  children: Children;
}): JSX.Element {
  return (
    <div className="m-auto p-5">
      <Breadcrumbs />

      <section className="grid grid-cols-[230px_1fr] gap-6">
        <FiltersCatalog />
        <div>
          <SortCatalog />
          <div>
            <div className="mt-3 flex flex-wrap justify-between gap-7">
              {children}
            </div>
            <div>pagination</div>
          </div>
        </div>
      </section>

      <hr />

      <BuyTogetherSection />
    </div>
  );
}
