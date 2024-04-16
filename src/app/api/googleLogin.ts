import axios from "axios";

import { API_URL } from "./config";

export const getTokens = async (code: string) => {
  const tokens = await axios.post(`${API_URL}accounts/google_auth_code/`, {
    code,
    // redirect_uri: "postmessage",
    state: "123",
  });
  console.log(tokens);
  return tokens;
};
