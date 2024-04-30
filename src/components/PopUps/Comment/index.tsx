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

function CommentPopUp({ isOpen, onClose }: ModalDialogProps): JSX.Element {
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
      console.log(parsedProductID);
      setProductId(parsedProductID);
    }
  }, [productId]);

  const { isAuth } = useAuth();
  const [cookies] = useCookies();

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

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const addComment = async () => {
    if (!productId || !isAuth) {
      console.error("Product ID or authentication is missing");
      return;
    }

    const parsedCriterias = Object.entries(criterias).reduce(
      (acc, [key, value]) => {
        const parsedValue = parseFloat(value);
        acc[key] = isNaN(parsedValue) ? 0 : parsedValue; // Default to 0 if parsing fails
        return acc;
      },
      {} as Record<string, number>,
    );

    const completeCriterias = {
      description_match: 0,
      photo_match: 0,
      price: 0,
      quality: 0,
      ...parsedCriterias, // Spread the parsed values over the defaults
    };

    try {
      const commentOfUser = {
        productId,
        comment,
        rate: globalRate,
        criterias: completeCriterias,
        token: cookies.access,
      };

      const response = await addProductComment(commentOfUser).unwrap();
      console.log("Comment added successfully:", response);
      // Optionally, you can reset the comment state after successful addition
      setComment("");
      setGlobalRate(0);
      setCriteriaRates(
        Object.keys(criterias).reduce(
          (acc, key) => {
            acc[key] = 0;
            return acc;
          },
          {} as Record<string, number>,
        ),
      );
      // You can also close the modal or show a success message
      onClose();
    } catch (error) {
      console.error("Error adding comment:", error);
      // Handle the error as needed, e.g., show an error message to the user
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
          value={comment}
          onChange={handleCommentChange}
          rows={10}
          className="w-72 resize-none md:w-[450px] block mx-auto outline-none border-2 p-5
    border-solid rounded-md focus:border-blue-500 font-light text-[18px] mb-2"
        ></textarea>
        <div className="mx-auto  flex items-center gap-1 mb-12">
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
          className=" block btn btn-effect text-center mx-auto"
        >
          {t("comments.btn_add_comment")}
        </button>
      </div>
    </ModalContainer>
  );
}

export default CommentPopUp;
