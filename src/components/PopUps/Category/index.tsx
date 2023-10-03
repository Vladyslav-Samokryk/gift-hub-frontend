import { arrayCategories, getSubImg, useTypedTranslation } from "@src/shared";
import CategoryButton from "@src/shared/UI/Buttons/CategoryButton";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

interface CategoryProps {
  visible: boolean;
  setVisible: (value: boolean | ((prev: boolean) => boolean)) => void;
}

interface SubcategoryCardProps {
  subTitle: string;
  subImg: string;
}

function SubcategoryCard ({ subTitle, subImg }: SubcategoryCardProps): JSX.Element {
  return <div className="hover:cursor-pointer mb-2 ml-7 flex w-full items-center md:block md:w-36 md:text-center">
    <img src={subImg} alt={subTitle} className="mr-2 h-12 w-12 md:h-36 md:w-full"/>
    <p>{subTitle}</p>
  </div>;
}

export default function Category ({ visible, setVisible }: CategoryProps): JSX.Element {
  const t = useTypedTranslation();
  const [categoryIndex, setCategoryIndex] = useState(0);

  return (
    <AnimatePresence>
      {visible && (
        <>
          <motion.div className="absolute left-0 top-0 z-40 h-screen w-full" onClick={() => setVisible(false)}/>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-x-0 top-44 z-50 m-auto flex w-full rounded-md bg-white p-1 shadow-drop sm:w-[75%] md:p-3 lg:top-48"
          >
            <div>
              {t("categories").map((category: string, index: number) =>
                <CategoryButton key={index} title={category} icon={arrayCategories[index]} active={categoryIndex === index} onClick={() => setCategoryIndex(index)}/>)}
            </div>
            <div className="flex flex-wrap content-start">
              {t("subcategories")[categoryIndex].map((sub: string, index: number) =>
                <SubcategoryCard key={index} subTitle={sub} subImg={getSubImg(categoryIndex, index)}/>,
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
