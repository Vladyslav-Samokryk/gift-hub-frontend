import type { ModalDialogProps } from "shared/types/Modals";
import { useTranslation } from "react-i18next";
import SortCatalog from "components/SortCatalog";
import ModalContainer from "shared/UI/ModalContainer";
import ModalHeader from "shared/UI/ModalHeader";

const SortPopUp = ({ isOpen, onClose }: ModalDialogProps): JSX.Element => {
  const { t } = useTranslation();

  return (
    <ModalContainer visible={isOpen} onClose={onClose} top={150}>
      <ModalHeader title={t("sort_popup_header")} onClose={onClose} />
      <SortCatalog />
    </ModalContainer>
  );
};

export default SortPopUp;
