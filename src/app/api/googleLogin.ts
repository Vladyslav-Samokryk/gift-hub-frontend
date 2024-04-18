import axios from "axios";

import { API_URL } from "./config";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const getTokens = async (code: string) => {
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  const tokens = await axios.post(`${API_URL}accounts/google_auth_code/`, {
    code,
    state: "123",
  });
  return tokens;
};
