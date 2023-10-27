import { useGetCategoriesQuery } from "@src/app/api/categories";
import {
  CategoryButton,
  SCREEN,
  useGetCurrentLang,
  useScreenWidth,
} from "@src/shared";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import type { CatalogSub } from "@src/shared";

interface CatalogPopUpProps {
  visible: boolean;
  setVisible: (value: boolean | ((prev: boolean) => boolean)) => void;
  setCategoryVisible: (
    value: CatalogSub | ((prev: CatalogSub) => CatalogSub),
  ) => void;
}

interface SubcategoryCardProps {
  subTitle: string;
  subImg: string;
  subUrl: string;
  onClick: () => void;
}

function SubcategoryCard({
  subTitle,
  subImg,
  subUrl,
  onClick,
}: SubcategoryCardProps): JSX.Element {
  return (
    <Link
      to={"/catalog/" + subUrl}
      className="mb-2 ml-7 flex w-full items-center md:block md:w-36 md:text-center"
      onClick={onClick}
    >
      <img
        src={subImg}
        alt={subTitle}
        className="mr-2 h-12 w-12 md:h-36 md:w-full"
      />
      <p className="additional">{subTitle}</p>
    </Link>
  );
}

export default function CatalogPopUp({
  visible,
  setVisible,
  setCategoryVisible,
}: CatalogPopUpProps): JSX.Element {
  const lang = useGetCurrentLang();
  const [categoryIndex, setCategoryIndex] = useState(0);
  const { data, isLoading } = useGetCategoriesQuery(lang);
  const windowWidth = useScreenWidth();

  return (
    <AnimatePresence>
      {visible && !isLoading && data && (
        <>
          <motion.div
            className="absolute left-0 top-0 z-40 h-full w-full"
            onClick={() => setVisible(false)}
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-x-0 top-44 z-50 m-auto flex w-full rounded-md bg-white p-1 shadow-drop sm:w-[75%] md:p-3 lg:top-48"
          >
            <div>
              {data.map((category, index: number) => (
                <CategoryButton
                  key={index}
                  title={category.name}
                  icon={data[index].icon}
                  active={categoryIndex === index}
                  onClick={() => {
                    setCategoryIndex(index);
                    if (windowWidth <= SCREEN.MD) {
                      setCategoryVisible({
                        visible: true,
                        sub: data[index].sub,
                        title: data[index].name,
                      });
                    }
                    setVisible(false);
                  }}
                />
              ))}
            </div>
            {windowWidth > SCREEN.MD ? (
              <div className="flex flex-wrap content-start">
                {data[categoryIndex].sub.map((sub, index: number) => (
                  <SubcategoryCard
                    key={index}
                    subTitle={sub.name}
                    subImg={sub.img}
                    subUrl={sub.url}
                    onClick={() => setVisible(false)}
                  />
                ))}
              </div>
            ) : null}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
