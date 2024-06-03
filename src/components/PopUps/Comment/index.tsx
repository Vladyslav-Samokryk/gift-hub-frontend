/* eslint-disable @typescript-eslint/no-misused-promises */
import { useState, useEffect } from "react";
import { t } from "i18next";
import ModalContainer from "shared/UI/ModalContainer";
import ModalHeader from "shared/UI/ModalHeader";
import StarRate from "shared/UI/StarRate";
import type { ModalDialogProps } from "shared/types/Modals";
import type { TRCriteria } from "shared/types/Translation";
import { Warning } from "shared/assets/svg/Warning";
import { productsApi } from "app/api/products";
import { useCookies } from "react-cookie";
import { useAuth } from "shared/hooks/useAuth";
import { useGetUserInfoQuery } from "app/api/auth";

interface Critaries {
  description_match: number;
  photo_match: number;
  price: number;
  quality: number;
}

function CommentPopUp({
  isOpen,
  onClose,
  data,
}: ModalDialogProps): JSX.Element {
  const criterias: TRCriteria = t("rate_by_criteria", {
    returnObjects: true,
  });

  const [globalRate, setGlobalRate] = useState<number>(0);
  const [comment, setComment] = useState<string>("");
  const [productId, setProductId] = useState<string | null>("");
  const [addProductComment] = productsApi.useAddProductCommentMutation();

  useEffect(() => {
    const productID = localStorage.getItem("productID");
    if (productID) {
      const parsedProductID = JSON.parse(productID)[0];
      setProductId(parsedProductID);
    }
  }, [productId]);

  const { isAuth } = useAuth();
  const [cookies] = useCookies();

  const { data: userInfo } = useGetUserInfoQuery(cookies.access);

  const [criteriaRates, setCriteriaRates] = useState<Critaries>({
    description_match: 0,
    photo_match: 0,
    price: 0,
    quality: 0,
  });

  const handleGlobalRateChange = (newRate: number): void => {
    setGlobalRate(newRate);
  };

  const handleCriteriaRateChange = (
    key: keyof Critaries,
    newRate: number,
  ): void => {
    setCriteriaRates((prevRates) => ({
      ...prevRates,
      [key]: newRate,
    }));
  };

  const handleCommentChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
  ): void => {
    setComment(e.target.value);
  };

  const addComment = async (): Promise<void> => {
    if (!productId || !isAuth) {
      return;
    }

    try {
      const commentOfUser = {
        productId,
        comment,
        rate: globalRate,
        criterias: criteriaRates,
        token: cookies.access,
      };

      await addProductComment(commentOfUser).unwrap();
      setComment("");
      setGlobalRate(0);
      if (data?.refetchOneProductComment) {
        await data.refetchOneProductComment();
      }
      if (onClose) onClose();
    } catch (error) {
      //
    }
  };

  return (
    <ModalContainer visible={isOpen} onClose={onClose} top={100}>
      <div className="font-rubik">
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

        <div className="mb-8 font-rubik">
          <h2>{userInfo?.first_name}</h2>
          <div className="flex gap-3 text-sm">
            <p>{t("comments.comment_description")}</p>
            <button className="text-blue-600">
              {t("comments.learn_more")}
            </button>
          </div>
        </div>

        <div className="mb-8 flex flex-col gap-4 font-rubik">
          <div className="flex justify-between">
            <p className="primary">{t("global_rate")}</p>
            <StarRate rate={globalRate} onRateChange={handleGlobalRateChange} />
          </div>

          {Object.entries(criterias).map(([key, el], i) => (
            <div key={i} className="flex justify-between">
              <p className="primary">{el}</p>
              <StarRate
                rate={criteriaRates[key as keyof Critaries]}
                onRateChange={(newRate) =>
                  handleCriteriaRateChange(key as keyof Critaries, newRate)
                }
              />
            </div>
          ))}
        </div>
        <textarea
          value={comment}
          onChange={handleCommentChange}
          rows={10}
          className="mx-auto mb-2 block w-72 resize-none rounded-md border-2 border-solid
    p-5 text-[18px] font-light outline-none focus:border-blue-500 md:w-[450px]"
        ></textarea>
        <div className="mx-auto  mb-12 flex items-center gap-1">
          <Warning fill={comment.length > 400 ? "#ff3232" : "#13183a"} />
          <p
            className={comment.length > 400 ? "text-accent-red" : "text-black"}
          >
            {t("comments.max_comment_length")}
          </p>
        </div>
        <button
          onClick={addComment}
          disabled={comment.length > 400 || comment.length === 0}
          className=" btn btn-effect mx-auto block text-center"
        >
          {t("comments.btn_add_comment")}
        </button>
      </div>
    </ModalContainer>
  );
}

export default CommentPopUp;
