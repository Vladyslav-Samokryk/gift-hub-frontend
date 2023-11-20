import type { modalsList, MODALS } from "../../app/context/modalContext/modals";
import type { CategorySub } from "./Categories";

type ValueOf<T extends string> = `${T}`;

export interface ModalDataProps {
  error?: boolean;
  title?: string;
  sub?: CategorySub[];
}

export interface ModalDialogProps {
  isOpen: boolean;
  name: ValueOf<MODALS> | "";
  onClose?: () => void;
  onConfirm?: () => void;
  data?: ModalDataProps;
}

export type UnionToIntersection<U> = (
  U extends object ? (k: U) => void : never
) extends (k: infer I) => void
  ? I
  : never;

export interface ModalDataT {
  name: ValueOf<MODALS> | "";
  data?: ModalDataProps;
}

export interface ModalContextT {
  modal: ModalDataT;
  onClose: () => void;
  onOpen: (modal: ModalDataT) => void;
}
