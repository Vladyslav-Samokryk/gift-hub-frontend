import { t } from "i18next";
import ModalContainer from "shared/UI/ModalContainer";
import ModalHeader from "shared/UI/ModalHeader";
import StarRate from "shared/UI/StarRate";
import type { ModalDialogProps } from "shared/types/Modals";
import type { TRCriteria } from "shared/types/Translation";

function CommentPopUp({ isOpen, onClose }: ModalDialogProps): JSX.Element {
  const criterias: TRCriteria = t("rate_by_criteria", {
    returnObjects: true,
  });

  return (
    <ModalContainer visible={isOpen} onClose={onClose} top={100}>
      <ModalHeader
        title={t("comments.write_comment.header")}
        onClose={onClose}
      />
      <p>{t("comments.write_comment.description")}</p>
      <div>
        <div className="flex justify-between">
          <p className="primary">{t("global_rate")}</p>
          <StarRate rate={0} />
        </div>

        {Object.values(criterias).map((el, i) => (
          <div key={i} className="flex justify-between">
            <p className="primary">{el}</p>
            <StarRate rate={0} />
          </div>
        ))}
      </div>
      <textarea rows={10} className="w-72 md:w-[450px]"></textarea>
      <div>
        <p>{t("comments.max_comment_length")}</p>
      </div>
      <button className="btn btn-effect">
        {t("comments.btn_add_comment")}
      </button>
    </ModalContainer>
  );
}

export default CommentPopUp;
