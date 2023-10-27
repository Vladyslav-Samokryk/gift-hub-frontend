import { useScreenWidth, type Children } from "@src/shared";
import { AnimatePresence, motion } from "framer-motion";

interface ChildrenProps {
  visible: boolean;
  children: Children;
  onClose: () => void;
}

export default function ModalContainer({
  visible,
  onClose,
  children,
}: ChildrenProps): JSX.Element {
  const windowWidth = useScreenWidth();
  return (
    <AnimatePresence>
      {visible && (
        <div className="fixed inset-0 z-50">
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            animate={{
              y: windowWidth > 648 ? 100 : 30,
              opacity: 1,
            }}
            exit={{
              y: -200,
              opacity: 0,
            }}
            transition={{ type: "spring", bounce: 0, duration: 0.9 }}
            className="sticky inset-x-0 z-10 m-auto h-max w-fit rounded-md border-2 border-gray-400 bg-white px-7 py-5 shadow-main"
          >
            {children}
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 0.25,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{ type: "spring", bounce: 0, duration: 0.2 }}
            onClick={onClose}
            className="fixed left-0 top-0 z-0 flex h-full w-full items-center justify-center bg-gray-900 px-5"
          />
        </div>
      )}
    </AnimatePresence>
  );
}
