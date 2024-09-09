import { MODALS } from "app/context/modalContext/modals";
import { useModals } from "app/context/modalContext/useModals";
import { reviews } from "mock";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";

import type { Reviews } from "shared/types/Admin";

function AdminReviewAnswer(): JSX.Element {
  const { id } = useParams();
  const { t } = useTranslation();
  const [review, setReview] = useState<Reviews | undefined>();
  const [answer, setAnswer] = useState<string>("");
  const { onOpen } = useModals();

  useEffect(() => {
    setReview(reviews.find((el) => el.id === id));
  }, [id]);

  function changeAnswer(text: string): void {
    setAnswer(text);
  }

  function saveAnswer(): void {
    setAnswer("");
    onOpen({
      name: MODALS.PUSH,
      data: {
        variant: "success",
        message: t("push_notifications.success.default"),
      },
    });
  }

  return (
    <>
      {review ? (
        <div className="mobile-font xl:primary flex flex-col gap-5">
          <section className="flex justify-between">
            <p>{review.user_name}</p>
            <Link
              to={`/product/${review.product_id}`}
              className="text-blue-700 hover:text-blue-800"
            >
              <p className="underline decoration-solid">{t("see_product")}</p>
            </Link>
          </section>
          <section>
            <textarea
              className="secondary h-40 w-full rounded-md border-2 border-blue-900 p-2 font-light"
              value={review.review}
              disabled
            ></textarea>
          </section>
          <section>
            <p>{t("review_answer") + " :"}</p>
            <textarea
              className="secondary mt-2 h-40 w-full rounded-md border-2 border-black p-2 font-light"
              value={answer}
              onChange={(e) => changeAnswer(e.target.value)}
            ></textarea>
          </section>
          <section>
            <p>{t("fast_answers.title") + " :"}</p>
            <div className="mt-2 flex items-center justify-start gap-5">
              <div className="secondary w-1/2 rounded-2xl border-2 border-accent-green p-5 font-light">
                <p>{t("fast_answers.positive")}</p>
              </div>
              <button
                className="rounded-full border-4 border-accent-green px-4 py-2 text-3xl font-bold text-accent-green hover:border-accent-deepGray hover:text-accent-deepGray"
                onClick={() => changeAnswer(t("fast_answers.positive"))}
              >
                +
              </button>
            </div>
            <div className="flex items-center justify-end gap-5">
              <button
                className="rounded-full border-4 border-accent-red px-4 py-2 text-3xl font-bold text-accent-red hover:border-accent-deepGray hover:text-accent-deepGray"
                onClick={() => changeAnswer(t("fast_answers.negative"))}
              >
                +
              </button>
              <div className="secondary w-1/2 rounded-2xl border-2 border-accent-red p-5 font-light">
                <p>{t("fast_answers.negative")}</p>
              </div>
            </div>
          </section>
          <button
            className="btn btn-effect mx-auto my-0"
            onClick={saveAnswer}
            disabled={answer.length === 0}
          >
            {t("btn_answer")}
          </button>
        </div>
      ) : null}
    </>
  );
}

export default AdminReviewAnswer;
