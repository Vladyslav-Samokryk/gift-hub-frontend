import { useGetCategoriesQuery } from "@src/app/api/categories";
import {
  CategoryButton,
  ModalHeader,
  SCREEN,
  useGetCurrentLang,
  useScreenWidth,
} from "@src/shared";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import type { CatalogSub } from "@src/shared";
import { SubcategoryCard } from "@src/components";
import { t } from "i18next";
import { useTranslation } from "react-i18next";

interface CatalogPopUpProps {
  visible: boolean;
  setVisible: (value: boolean | ((prev: boolean) => boolean)) => void;
  setCategoryVisible: (
    value: CatalogSub | ((prev: CatalogSub) => CatalogSub),
  ) => void;
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
  const { t } = useTranslation();

  return (
    <AnimatePresence>
      {visible && !isLoading && data && (
        <>
          <motion.div
            className="absolute left-0 top-0 z-40 h-full w-full  bg-gray-900"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 0.25,
            }}
            exit={{
              opacity: 0,
            }}
            onClick={() => setVisible(false)}
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-x-0 top-44 z-50 m-auto w-60 rounded-md bg-white p-4 shadow-drop sm:w-1/2 md:top-48 md:flex md:w-3/4 md:p-3"
          >
            {windowWidth < SCREEN.MD && (
              <ModalHeader
                title={t("header_links.catalog")}
                onClose={() => setVisible(false)}
              />
            )}
            <div>
              {data.map((category, index: number) => (
                <CategoryButton
                  key={index}
                  title={category.name}
                  icon={data[index].icon}
                  active={categoryIndex === index}
                  onClick={() => {
                    setCategoryIndex(index);
                    if (windowWidth < SCREEN.MD) {
                      setCategoryVisible({
                        visible: true,
                        sub: data[index].sub,
                        title: data[index].name,
                      });
                      setVisible(false);
                    }
                  }}
                />
              ))}
            </div>
            {windowWidth >= SCREEN.MD ? (
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
