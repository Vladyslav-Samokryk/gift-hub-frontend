import { useMemo, useState, type ReactNode } from "react";
import { ModalContext } from "../context/modalContext/modalContext";
import { Modals } from "@components";
import type { ModalDataT, ModalContextT } from "@src/shared/types/Modals";

const initialModalData: ModalDataT = {
  name: "",
  data: undefined,
};

export const withModals = (WrappedComponent: () => ReactNode) => () => {
  const [modalData, setModalData] = useState<ModalDataT>(initialModalData);

  const onClose = (): void => {
    setModalData(initialModalData);
  };

  const onOpen = (modal: ModalDataT): void => {
    setModalData(modal);
  };

  const providerValue: ModalContextT = useMemo(
    () => ({ onClose, onOpen, modal: modalData }),
    [modalData],
  );
  return (
    <ModalContext.Provider value={providerValue}>
      <WrappedComponent />
      <Modals />
    </ModalContext.Provider>
  );
};
