import type { ModalContextT } from "shared/types/Modals";
import { createContext } from "react";

export const ModalContext = createContext<ModalContextT | null>(null);
