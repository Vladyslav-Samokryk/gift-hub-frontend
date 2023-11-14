import { FiltersCatalog } from "@src/components";
import { ModalContainer, ModalHeader } from "@src/shared";
import type { ModalDialogProps } from "@src/shared/types/Modals";
import { useTranslation } from "react-i18next";

const FilterPopUp = ({ isOpen, onClose }: ModalDialogProps): JSX.Element => {
  const { t } = useTranslation();
  return (
    <ModalContainer visible={isOpen} onClose={onClose} top={100}>
      <ModalHeader title={t("filter_popup_header")} onClose={onClose} />
      <FiltersCatalog />
    </ModalContainer>
  );
};

export default FilterPopUp;
