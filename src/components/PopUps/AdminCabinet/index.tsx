import AdminNavigation from "components/AdminNavigaion";
import { useTranslation } from "react-i18next";
import ModalContainer from "shared/UI/ModalContainer";
import ModalHeader from "shared/UI/ModalHeader";
import type { ModalDialogProps } from "shared/types/Modals";

const AdminCabinetPopUp = ({
  isOpen,
  onClose,
}: ModalDialogProps): JSX.Element => {
  const { t } = useTranslation();
  return (
    <ModalContainer visible={isOpen} onClose={onClose} top={100}>
      <ModalHeader title={t("cabinet_popup_header")} onClose={onClose} />
      <div className="mt-5">
        <AdminNavigation onClose={onClose} />
      </div>
    </ModalContainer>
  );
};

export default AdminCabinetPopUp;
