import i18next from "i18next";

export function useGetCurrentLang(): string {
  return i18next.resolvedLanguage ?? "en";
}
