import compose from "compose-function";
import { withRouter } from "./with-router";
import { withStore } from "./with-store";
import { withModals } from "./with-modals";
import { withCookies } from "./with-cookies";

export const withProviders = compose(
  withCookies,
  withRouter,
  withStore,
  withModals,
);
