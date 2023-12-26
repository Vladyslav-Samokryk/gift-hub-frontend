import type { ModalDialogProps } from "shared/types/Modals";
import { useTranslation } from "react-i18next";
import FiltersCatalog from "components/FiltersCatalog";
import ModalContainer from "shared/UI/ModalContainer";
import ModalHeader from "shared/UI/ModalHeader";

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
