import compose from "compose-function";
import { withRouter } from "./with-router";
import { withStore } from "./with-store";
import { withModals } from "./with-modals";
import { withCookies } from "./with-cookies";
import { withGoogle } from "./with-google";

export const withProviders = compose(
  withGoogle,
  withCookies,
  withRouter,
  withStore,
  withModals,
);
