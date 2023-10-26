import { SortCatalog } from "@src/components";
import { ModalContainer, ModalHeader } from "@src/shared";
import { useTranslation } from "react-i18next";

interface SortProps {
  visible: boolean;
  setVisible: (value: boolean | ((prev: boolean) => boolean)) => void;
}

const SortPopUp = ({ visible, setVisible }: SortProps): JSX.Element => {
  const { t } = useTranslation();
  return (
    <ModalContainer visible={visible} setVisible={setVisible}>
      <ModalHeader title={t("sort_popup_header")} setVisible={setVisible} />
      <SortCatalog />
    </ModalContainer>
  );
};

export default SortPopUp;
