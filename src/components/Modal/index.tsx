import { createPortal } from "react-dom";

import type { ReactPortal } from "react";

import { modalsList } from "app/context/modalContext/modals";
import { useModals } from "app/context/modalContext/useModals";

const Modals = (): ReactPortal | null => {
  const { modal, onClose } = useModals();

  const Component = modalsList.find(({ name }) => name === modal.name)
    ?.component;

  return Component && modal
    ? createPortal(
        <Component
          name={modal.name}
          isOpen={!!Component}
          onClose={onClose}
          data={modal.data}
        />,
        document.querySelector("#modal-root") as HTMLElement,
      )
    : null;
};

export default Modals;
