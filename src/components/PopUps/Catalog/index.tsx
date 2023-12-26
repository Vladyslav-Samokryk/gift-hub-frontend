import { useGetCategoriesQuery } from "app/api/categories";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import SubcategoryCard from "components/SubCategoryCard";
import { useTranslation } from "react-i18next";
import { useModals } from "app/context/modalContext/useModals";
import { MODALS } from "app/context/modalContext/modals";
import type { ModalDialogProps } from "shared/types/Modals";
import CategoryButton from "shared/UI/Buttons/CategoryButton";
import ModalHeader from "shared/UI/ModalHeader";
import { SCREEN } from "shared/constants/screens";
import { useGetCurrentLang } from "shared/hooks/useGetCurrentLang";
import { useScreenWidth } from "shared/hooks/useScreenWidth";

export default function CatalogPopUp({
  isOpen,
  onClose,
}: ModalDialogProps): JSX.Element {
  const lang = useGetCurrentLang();
  const [categoryIndex, setCategoryIndex] = useState(0);
  const { data, isLoading } = useGetCategoriesQuery(lang);
  const windowWidth = useScreenWidth();
  const { t } = useTranslation();
  const { onOpen } = useModals();

  return (
    <AnimatePresence>
      {isOpen && !isLoading && data && (
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
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-x-0 top-44 z-50 m-auto w-auto rounded-md bg-white p-4 shadow-drop sm:w-[90%] md:top-48 md:flex md:p-3"
          >
            {windowWidth < SCREEN.MD && (
              <ModalHeader
                title={t("header_links.catalog")}
                onClose={onClose}
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
                      if (onClose) {
                        onClose();
                        onOpen({
                          name: MODALS.CATEGORY,
                          data: {
                            sub: data[index].sub,
                            title: data[index].name,
                          },
                        });
                      }
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
                    onClick={onClose}
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
