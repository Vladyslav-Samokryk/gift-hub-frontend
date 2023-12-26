import { useMemo, useState, type ReactNode } from "react";
import Modals from "components/Modal";
import type { ModalDataT, ModalContextT } from "shared/types/Modals";
import { ModalContext } from "app/context/modalContext/modalContext";

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
