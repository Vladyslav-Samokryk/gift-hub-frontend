import { type ReactNode, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

import Preloader from "shared/UI/Preloader";
import ScrollToTop from "shared/helpers/scrollToTop";

export const withRouter = (component: () => ReactNode) => () => (
  <BrowserRouter>
    <ScrollToTop />
    <Suspense fallback={<Preloader />}>{component()}</Suspense>
  </BrowserRouter>
);
