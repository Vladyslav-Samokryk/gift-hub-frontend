import { useModals } from "@src/app/context/modalContext/useModals";
import { ButtonWithIcon, ModalContainer, ModalHeader } from "@src/shared";
import { MODALS } from "@src/app/context/modalContext/modals";
import type { ModalDialogProps } from "@src/shared/types/Modals";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const CategoryPopUp = ({
  isOpen,
  onClose,
  data,
}: ModalDialogProps): JSX.Element => {
  const { onOpen } = useModals();
  const { t } = useTranslation();

  return (
    <ModalContainer visible={isOpen} onClose={onClose} top={150}>
      <ModalHeader title={data?.title ?? ""} onClose={onClose} />
      <div className="flex w-60 flex-col gap-3 divide-y-2">
        <ButtonWithIcon
          text={t("all_categories")}
          onClick={() => onOpen({ name: MODALS.CATALOG })}
          className="secondary-bold mt-3 gap-2"
        >
          &lt;
        </ButtonWithIcon>

        {data?.sub?.map((sub, index) => {
          return (
            <Link
              key={index}
              to={`/catalog/${sub.url.toString()}`}
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
