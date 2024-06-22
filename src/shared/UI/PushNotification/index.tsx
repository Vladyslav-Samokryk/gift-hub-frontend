import classNames from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import type { ModalDialogProps } from "shared/types/Modals";

export interface PushNotificationProps {
  variant?: "error" | "success";
  message?: string;
}

export default function PushNotification({
  data,
  onClose,
}: ModalDialogProps): JSX.Element {
  useEffect(() => {
    setTimeout(() => {
      if (onClose) onClose();
    }, 3000);
  }, []);
  return (
    <AnimatePresence>
      <div className="fixed inset-x-0 bottom-2 z-50">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{ type: "spring", bounce: 0, duration: 0.9 }}
          className={classNames(
            "sticky z-50 m-auto h-max w-fit rounded-md px-5 py-3 shadow-main",
            {
              "bg-[#C4FFCA] text-accent-green": data?.variant === "success",
              "bg-[#FFCCCC] text-accent-red": data?.variant === "error",
            },
          )}
        >
          <p>{data?.message}</p>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
