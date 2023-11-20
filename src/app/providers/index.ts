import compose from "compose-function";
import { withRouter } from "./with-router";
import { withStore } from "./with-store";
import { withInternet } from "./with-internet";
import { withModals } from "./with-modals";

export const withProviders = compose(
  withInternet,
  withRouter,
  withStore,
  withModals,
);
