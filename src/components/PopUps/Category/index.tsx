import type { CatalogSub } from "@src/shared";
import {
  ButtonWithIcon,
  ModalContainer,
  ModalHeader,
  LeftArrow,
} from "@src/shared";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

interface CategoryPopUpProps {
  onBack: () => void;
  popUp: CatalogSub;
  setPopUp: (value: CatalogSub | ((prev: CatalogSub) => CatalogSub)) => void;
}

const CategoryPopUp = ({
  onBack,
  popUp,
  setPopUp,
}: CategoryPopUpProps): JSX.Element => {
  const { t } = useTranslation();

  const onClose = (): void => {
    setPopUp((prev) => {
      return { ...prev, visible: false };
    });
  };

  return (
    <ModalContainer visible={popUp.visible} onClose={onClose}>
      <ModalHeader title={popUp.title} onClose={onClose} />
      <div className="flex w-60 flex-col gap-3 divide-y-2">
        <ButtonWithIcon
          text={t("all_categories")}
          onClick={onBack}
          className="secondary-bold mt-3 gap-2"
        >
          &lt;
        </ButtonWithIcon>

        {popUp.sub.map((sub, index) => {
          return (
            <Link
              key={index}
              to={"/catalog/" + sub.url}
              className="w-full"
              onClick={onClose}
            >
              <p className="additional pt-2 font-normal">{sub.name}</p>
            </Link>
          );
        })}
      </div>
    </ModalContainer>
  );
};

export default CategoryPopUp;
