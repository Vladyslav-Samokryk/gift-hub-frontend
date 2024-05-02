export const getEnvVar = (key: string): string | undefined => {
  if (import.meta.env[key] === undefined) {
    throw new Error(`Env variable ${key} is required`);
  }
  return import.meta.env[key] || "";
};

export const API_URL = getEnvVar("VITE_APP_API_URL");
export const NODE_ENV = getEnvVar("VITE_NODE_ENV");
export const CLIENT_ID = getEnvVar("VITE_APP_CLIENT_ID");

export const isDevEnv = NODE_ENV === "development";
export const isProdEnv = NODE_ENV === "production";

// TODO: in future get all information from .env
export const CONTACT_INFO = {
  number: "+380991235678",
  mail: "gifthub@gmail.com",
  location: "м.Київ, вулиця Олеся Гончара",
};

export const CURRENCY = "₴";
