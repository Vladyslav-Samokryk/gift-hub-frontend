import { useGetCategoriesQuery } from "@src/app/api/categories";
import { CategoryButton, useGetCurrentLang } from "@src/shared";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

interface CategoryProps {
  visible: boolean;
  setVisible: (value: boolean | ((prev: boolean) => boolean)) => void;
}

interface SubcategoryCardProps {
  subTitle: string;
  subImg: string;
  subUrl: string;
}

function SubcategoryCard({
  subTitle,
  subImg,
  subUrl,
}: SubcategoryCardProps): JSX.Element {
  return (
    <Link
      to={"/catalog/" + subUrl}
      className="mb-2 ml-7 flex w-full items-center md:block md:w-36 md:text-center"
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

export default function Category({
  visible,
  setVisible,
}: CategoryProps): JSX.Element {
  const lang = useGetCurrentLang();
  const [categoryIndex, setCategoryIndex] = useState(0);
  const { data, isLoading } = useGetCategoriesQuery(lang);

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
                  onClick={() => setCategoryIndex(index)}
                />
              ))}
            </div>
            <div className="flex flex-wrap content-start">
              {data[categoryIndex].sub.map((sub, index: number) => (
                <SubcategoryCard
                  key={index}
                  subTitle={sub.name}
                  subImg={sub.img}
                  subUrl={sub.url}
                />
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
