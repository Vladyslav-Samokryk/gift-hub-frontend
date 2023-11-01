import { SortCatalog } from "@src/components";
import { ModalContainer, ModalHeader } from "@src/shared";
import { useTranslation } from "react-i18next";

interface SortProps {
  visible: boolean;
  setVisible: (value: boolean | ((prev: boolean) => boolean)) => void;
}

const SortPopUp = ({ visible, setVisible }: SortProps): JSX.Element => {
  const { t } = useTranslation();
  const onClose = (): void => setVisible(false);
  return (
    <ModalContainer visible={visible} onClose={onClose} top={150}>
      <ModalHeader title={t("sort_popup_header")} onClose={onClose} />
      <SortCatalog />
    </ModalContainer>
  );
};

export default SortPopUp;
