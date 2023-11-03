import { FiltersCatalog } from "@src/components";
import { ModalContainer, ModalHeader } from "@src/shared";
import { useTranslation } from "react-i18next";

interface FilterProps {
  visible: boolean;
  setVisible: (value: boolean | ((prev: boolean) => boolean)) => void;
}

const FilterPopUp = ({ visible, setVisible }: FilterProps): JSX.Element => {
  const { t } = useTranslation();
  return (
    <ModalContainer
      visible={visible}
      onClose={() => setVisible(false)}
      top={100}
    >
      <ModalHeader
        title={t("filter_popup_header")}
        onClose={() => setVisible(false)}
      />
      <FiltersCatalog />
    </ModalContainer>
  );
};

export default FilterPopUp;
