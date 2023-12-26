import compose from "compose-function";
import { withRouter } from "./with-router";
import { withStore } from "./with-store";
import { withModals } from "./with-modals";

export const withProviders = compose(withRouter, withStore, withModals);
