import ReactDOM from "react-dom/client";
import App from "./app";
import { GoogleOAuthProvider } from "@react-oauth/google";

import {CLIENT_ID} from "./app/api/config"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <GoogleOAuthProvider clientId={CLIENT_ID!}>
    <App />,
  </GoogleOAuthProvider>,
);
