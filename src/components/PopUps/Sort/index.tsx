import { SortCatalog } from "@src/components";
import { ModalContainer, ModalHeader } from "@src/shared";
import type { ModalDialogProps } from "@src/shared/types/Modals";
import { useTranslation } from "react-i18next";

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
