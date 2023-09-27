import { ModalContainer, useTypedTranslation } from "@src/shared";
import CategoryButton from "@src/shared/UI/Buttons/CategoryButton";
import React from "react";

interface CategoryProps {
  visible: boolean;
  setVisible: (value: boolean | ((prev: boolean) => boolean)) => void;
}
/* className="absolute z-50 top-0 w-[90%] right-0 left-0 m-auto " */
export default function Category ({ visible, setVisible }: CategoryProps): JSX.Element {
  const t = useTypedTranslation();

  return (
    <ModalContainer setVisible={setVisible} visible={visible}>
{/*       {t("categories").map((category: string, index: number) =>
        <CategoryButton key={index} title={category} icon={}/>)} */}
    </ModalContainer>
  );
}
