import { useState} from "react";
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


  const [globalRate, setGlobalRate] = useState<number>(0);

  const [criteriaRates, setCriteriaRates] = useState<Record<string, number>>(
    Object.keys(criterias).reduce(
      (acc, key) => {
        acc[key] = 0;
        return acc;
      },
      {} as Record<string, number>,
    ),
  );

  const handleGlobalRateChange = (newRate: number) => {
    setGlobalRate(newRate);
  };

  const handleCriteriaRateChange = (key: string, newRate: number) => {
    setCriteriaRates((prevRates) => ({
      ...prevRates,
      [key]: newRate,
    }));
  };

  return (
    <ModalContainer visible={isOpen} onClose={onClose} top={100}>
      <div>
        <div className="mb-10">
          <ModalHeader
            classname="font-rubik"
            title={t("comments.write_comment.header")}
            onClose={onClose}
          />
          <p className="font-rubik font-light ">
            {t("comments.write_comment.description")}
          </p>
        </div>

        <div className="font-rubik mb-8">
          <h2>Users name</h2> {/* name of user will be given from db */}
          <div className="flex gap-3 text-sm">
            <p>{t("comments.comment_description")}</p>
            <button className="text-blue-600">
              {t("comments.learn_more")}
            </button>
          </div>
        </div>

        <div className="font-rubik flex flex-col mb-8 gap-4">
          <div className="flex justify-between">
            <p className="primary">{t("global_rate")}</p>
            <StarRate rate={globalRate} onRateChange={handleGlobalRateChange} />
          </div>

          {Object.entries(criterias).map(([key, el], i) => (
            <div key={i} className="flex justify-between">
              <p className="primary">{el}</p>
              <StarRate
                rate={criteriaRates[key]}
                onRateChange={(newRate) =>
                  handleCriteriaRateChange(key, newRate)
                }
              />
            </div>
          ))}
        </div>
        <textarea
          rows={10}
          className="w-72 resize-none md:w-[450px] block mx-auto outline-none border-2 p-5
    border-solid rounded-md focus:border-blue-500 font-light text-[18px]"
        ></textarea>
        <div>
          <p>{t("comments.max_comment_length")}</p>
        </div>
        <button className="btn btn-effect">
          {t("comments.btn_add_comment")}
        </button>
      </div>
    </ModalContainer>
  );
}

export default CommentPopUp;
