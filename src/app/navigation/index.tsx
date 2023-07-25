import { Routes, Route } from "react-router";

import { About, Home, NotFound } from "@src/pages";
import { Layout } from "./Layout";

export const Routing = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
