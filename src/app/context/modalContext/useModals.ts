import type { ModalContextT } from "shared/types/Modals";
import { useContext } from "react";
import { ModalContext } from "./modalContext";

export const useModals = (): ModalContextT => {
  const data = useContext(ModalContext);

  if (!data) {
    throw new Error("useModals was used outside of its Provider");
  }

  return data;
};
