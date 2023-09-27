import { arrayCategories, getSubImg, useTypedTranslation } from "@src/shared";
import CategoryButton from "@src/shared/UI/Buttons/CategoryButton";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

interface CategoryProps {
  visible: boolean;
  setVisible: (value: boolean | ((prev: boolean) => boolean)) => void;
}

export default function Category ({ visible, setVisible }: CategoryProps): JSX.Element {
  const t = useTypedTranslation();
  const [categoryIndex, setCategoryIndex] = useState(0);

  return (
    <AnimatePresence>
      {visible && (
        <>
          <motion.div className="absolute z-40 left-0 top-0 h-screen w-screen" onClick={() => setVisible(false)}/>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-x-0 z-50 m-auto top-44 lg:top-48 flex w-full sm:w-[75%] rounded-md bg-white p-1 md:p-3 shadow-drop"
          >
            <div>
              {t("categories").map((category: string, index: number) =>
                <CategoryButton key={index} title={category} icon={arrayCategories[index]} active={categoryIndex === index} onClick={() => setCategoryIndex(index)}/>)}
            </div>
            <div className="flex flex-wrap content-start">
              {t("subcategories")[categoryIndex].map((sub: string, index: number) =>
                <div key={index} className="flex md:block w-full md:w-36 md:text-center items-center ml-7 mb-2">
                  <img src={getSubImg(categoryIndex, index)} alt={sub} className="w-12 h-12 mr-2 md:w-full md:h-36"/>
                  <p>{sub}</p>
                </div>,
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
