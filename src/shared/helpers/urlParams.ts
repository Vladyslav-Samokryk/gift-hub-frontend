export function urlParams(
  paramName: string,
  paramValues: number | string | string[],
): string {
  if (!paramName || !Array.isArray(paramValues) || paramValues.length === 0) {
    return "";
  }

  const queryString = paramValues
    .map((val) => `&${paramName}=${encodeURIComponent(val.toString())}`)
    .join("");

  return queryString;
}

export function generateHeader(
  token: string | undefined,
  lang: string,
): Record<string, string> {
  return token
    ? {
        Authorization: `Bearer ${token}`,
        "Accept-Language": lang,
      }
    : {
        "Accept-Language": lang,
      };
}
